# gql-client — Prisma-style GraphQL for phc-frontend

A type-safe, codegen-driven object API over the platform GraphQL schema. No
`.gql`/`.graphql` files; the call site itself is the query.

## Layout

```
app/gql-client/
├── generated/      # gitignored, output of scripts/gen-gql.ts
├── runtime/
│   ├── builder.ts   # object → { query, variables }
│   ├── client.ts    # execute(...) — delegates to useApi(true).graphql.request
│   └── inferred.ts  # Selected<T,S>, MergeRoot, RequireKeys
└── index.ts
```

The composable lives at `app/composables/useGql.ts` so Nuxt auto-imports it
the same way as the rest of the project.

## Setup (one-time)

1. Regenerate `graphql.schema.json` (already wired via `pnpm codegen`).
2. Run the new client codegen:
   ```bash
   pnpm exec tsx scripts/gen-gql.ts
   ```
3. Optional — add to `package.json`:
   ```json
   "codegen:gql-client": "tsx scripts/gen-gql.ts",
   "postcodegen":       "tsx scripts/gen-gql.ts"
   ```
   so it runs right after schema introspection.

## Usage

```ts
const data = await useGql.query([
  {
    context: {
      settings: {
        where: { props: { status: 'active' } },
        include: { id: true, value: true, props: true },
      },
    },
  },
  {
    identity: {
      users: { where: { id: '…' }, include: { id: true, email: true } },
    },
  },
]);
```

`data.context.settings` and `data.identity.users` are fully typed — fields
not in the `include` are absent from the result type.

## Conventions (locked design decisions)

These are the v1 shape — change them only if the whole client is on board,
since they bleed into every call site.

### `include` — the only selection key

Prisma has both `select` and `include` and people get tripped up. We expose
**only `include`**. Empty `include` is a type error (GraphQL has no
"fetch everything").

### `__field` — alias escape hatch

Same field, two argument sets, one round-trip:

```ts
useGql.query({
  identity: {
    admins:    { __field: 'users', where: { role: 'ADMIN' }, include: { id: true } },
    customers: { __field: 'users', where: { role: 'CUSTOMER' }, include: { id: true } },
  },
});
// emits: identity { admins: users(where: $v1) { id }  customers: users(where: $v2) { id } }
```

The result key matches the alias, not the underlying field name.

### `__on` — fragments for unions / interfaces

```ts
useGql.query({
  search: {
    where: { q: '…' },
    include: {
      __typename: true,
      __on: {
        User:   { id: true, email: true },
        Patient:{ id: true, mrn: true },
      },
    },
  },
});
// emits: search(where: $v1) { __typename ... on User { id email } ... on Patient { id mrn } }
```

### Multi-operation root — *merge*, not batch

Passing an array at the root is a single GraphQL operation that is *merged*
into one selection set (atomic-ish, one cache key, one round-trip).
Conflicting top-level keys throw at build time — use `__field` to alias.

### Free-schema fields (`props`, `metadata`)

Listed in `FREE_SCHEMA_FIELDS` in `scripts/gen-gql.ts`. Their TS type is
`JsonObject` and the Select shape only allows `true` (no sub-selection — the
schema has no sub-fields). Add new dynamic paths to that set as you
discover them.

### Variables

Every argument is lifted to a typed `$var`. Never inline user data into the
query — the builder enforces this. JSON scalars pass through verbatim; do
not pre-`JSON.stringify(props)` at the call site.

## Trade-offs to know

- **TS recursion depth.** `Selected<T,S>` fans out per field; usually fine,
  but if the schema grows to thousands of types and you hit TS2589, split
  generated files per domain and lazy-import.
- **No APQ.** Builder output is deterministic for a given selection, so the
  server's automatic-persisted-queries cache still works — you just can't
  pre-register operations from a static `.gql` directory.
- **Backend coupling.** Renaming a GraphQL field becomes a TS compile error
  everywhere. Re-run codegen before `pnpm typecheck` and CI.
- **No subscriptions yet.** Add `useGql.subscribe()` when the platform
  exposes a `subscriptionType`; the builder already supports the shape.

## What you give up vs. `.gql` files

- Fragment masking (`@graphql-codegen/client-preset`).
- Operation-level static analysis tools.
- Pre-registered operations / `@graphql-codegen/typescript-operations`.

If/when any of those becomes load-bearing, run both clients side-by-side —
they don't conflict.
