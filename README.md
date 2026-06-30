<div align="center">

# gqlx

**Prisma-style, codegen-driven GraphQL client for TypeScript.**

_No `.gql` files. No template strings. The call site itself is the query._

[![npm version](https://img.shields.io/npm/v/gqlx.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/gqlx)
[![npm downloads](https://img.shields.io/npm/dm/gqlx.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/gqlx)
[![bundle size](https://img.shields.io/bundlephobia/minzip/gqlx?style=flat-square&color=blue)](https://bundlephobia.com/package/gqlx)
[![license](https://img.shields.io/npm/l/gqlx.svg?style=flat-square&color=blue)](./LICENSE)
[![types](https://img.shields.io/npm/types/gqlx.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/gqlx)

</div>

---

```ts
const data = await gql.query({
  findUserById: {
    id: 'u_1',
    include: { id: true, email: true, posts: { include: { title: true } } },
  },
});

// data.findUserById.data is exactly { id: string; email: string; posts: { title: string }[] }
// Nothing more. Nothing less. No casts. No `any`.
```

## Why gqlx

GraphQL clients usually force a tradeoff: either you write `.gql` strings (and lose colocation, refactor safety, and IDE flow), or you adopt a generator that produces hooks tied to specific queries. **gqlx removes the tradeoff.** The selection object _is_ the query, the response type is narrowed to exactly the fields you picked, and one round-trip can target multiple root fields — all driven by an introspected, fully typed descriptor of your schema.

- **Zero `.gql` files** — write selections inline as TypeScript objects.
- **Precise return types** — `Selected<T, S>` narrows the response to the shape you asked for, with no casts.
- **Argument inference** — `where`, `data`, `filter`, etc. are typed from the schema, every value lifted to a `$variable`.
- **Multi-endpoint** — merge several GraphQL services into one client. One config, one generator, one import.
- **Pluggable transport** — axios (default), `fetch`, or BYO function to bridge into an existing SDK.
- **Unions & interfaces** — `__on` carries inline fragments with per-type selections, all typed.
- **Single round-trip batching** — pass an array of selections; gqlx merges them into one operation.

## Install

```bash
npm install gqlx
# or
pnpm add gqlx
# or
yarn add gqlx
```

> Requires Node `>=18.17`. TypeScript `>=5.0` recommended.

## Quickstart

**1. Scaffold a config.**

```bash
npx gqlx init
```

This drops a `gql.config.ts` at the project root. Open it and point `schemas` at your endpoint(s).

**2. Generate the typed client.**

```bash
npx gqlx generate
```

This introspects every endpoint and writes the typed descriptors to `node_modules/.gqlx/`. Re-run whenever the schema changes — renamed or removed fields become TypeScript errors at every call site.

**3. Create the client (one file in your app).**

```ts
// src/gql.ts
import { createUseGql } from 'gqlx/generated';

export const gql = createUseGql({
  endpoint: 'http://localhost:3010/graphql',
});
```

**4. Query.**

```ts
import { gql } from './gql';

const data = await gql.query({
  findUsers: {
    where: { role: 'ADMIN' },
    include: { id: true, email: true },
  },
});

await gql.mutate({
  createUser: {
    data: { email: 'a@b.com' },
    include: { id: true },
  },
});
```

That's it. No `.gql` files. No hooks generated per query. No `unknown` returns.

## Table of contents

- [Configuration](#configuration)
- [Transports](#transports)
- [Selection DSL](#selection-dsl)
  - [`include` — what to fetch](#include--what-to-fetch)
  - [Wrapper unwrap (`items` / `data`)](#wrapper-unwrap-items--data)
  - [`__field` — aliasing](#__field--aliasing)
  - [`__on` — unions & interfaces](#__on--unions--interfaces)
  - [Array root — batched operations](#array-root--batched-operations)
  - [Per-call `config`](#per-call-config)
  - [Variables](#variables)
- [CLI](#cli)
- [Programmatic codegen](#programmatic-codegen)
- [Custom output location](#custom-output-location)
- [How `gqlx/generated` resolves](#how-gqlxgenerated-resolves)
- [Caveats](#caveats)
- [License](#license)

## Configuration

`gql.config.ts` lives at the project root. `defineConfig` is an identity helper that gives you IntelliSense.

```ts
import { defineConfig } from 'gqlx';

export default defineConfig({
  // One or more endpoints. Multiple schemas merge into a single client.
  // Root-field collisions throw at codegen time — disambiguate with __field.
  schemas: [
    'http://localhost:3010/graphql',
    { url: 'http://localhost:6050/graphql', headers: { 'x-internal': '1' } },
  ],

  // Where to write generated files.
  // Default: node_modules/.gqlx (works with `import { createUseGql } from 'gqlx/generated'`)
  // Set a path under src/ if you'd rather commit the output.
  // output: './src/generated/gqlx',

  // Scalar → TS overrides. Merged onto defaults (String, Int, ID, Float, Boolean).
  // scalars: { BigInt: 'string', Decimal: 'string', DateTime: 'string' },

  // Fields whose value is JSON (no sub-selection). `*` matches any parent.
  // Default: ['*.props', '*.metadata']
  // freeSchemaFields: ['*.props', '*.metadata', 'Event.payload'],

  // npm package the generated client imports `createClient` from.
  // Default: 'gqlx'. Override if you've wrapped this library.
  // runtimePackage: '@acme/gqlx',
});
```

| Field              | Type                       | Default                       | Description                                                          |
| ------------------ | -------------------------- | ----------------------------- | -------------------------------------------------------------------- |
| `schemas`          | `(string \| { url, headers? })[]` | _required_              | Endpoints to introspect.                                              |
| `output`           | `string`                   | `node_modules/.gqlx`          | Directory to write generated files.                                   |
| `scalars`          | `Record<string, string>`   | built-in                      | Scalar-name → TS-type overrides.                                      |
| `freeSchemaFields` | `string[]`                 | `['*.props', '*.metadata']`   | Field paths typed as `JsonObject` (selected as `true`, no sub-fields). |
| `runtimePackage`   | `string`                   | `'gqlx'`                      | Package the generated client imports `createClient` from.             |

## Transports

`createUseGql` accepts one of three shapes — pick whichever fits your environment.

### 1. axios (default)

```ts
createUseGql({
  endpoint: 'https://api.example.com/graphql',
  headers: { authorization: () => `Bearer ${getToken()}` },
});
```

To inherit interceptors from an axios instance you already own:

```ts
import { http } from './http'; // your configured AxiosInstance

createUseGql({ endpoint: '/graphql', axios: http });
```

### 2. fetch

For axios-free environments (edge runtimes, workers, the browser fetch).

```ts
createUseGql({
  endpoint: '/graphql',
  adapter: 'fetch',
  headers: () => ({ authorization: `Bearer ${getToken()}` }),
});
```

### 3. Bring your own transport

For an existing SDK that already handles auth, refresh, base URL, error normalization, retries — everything.

```ts
import { mySDK } from './sdk';

createUseGql({
  transport: async ({ query, variables, config }) => {
    return mySDK.graphql.request({ query, variables }, config);
  },
});
```

## Selection DSL

### `include` — what to fetch

`include` is the **only** selection key. Empty `include` is a type error — GraphQL has no "fetch everything".

```ts
gql.query({
  user: { id: 'u_1', include: { id: true, email: true } },
});
```

Nested selection composes the same way:

```ts
gql.query({
  user: {
    id: 'u_1',
    include: {
      id: true,
      posts: { include: { id: true, title: true } },
    },
  },
});
```

### Wrapper unwrap (`items` / `data`)

Many servers wrap responses in a single-field serializer:

```graphql
type FindUserResult { data: User }
type UsersPage { items: [User!]! }
```

gqlx detects these at codegen time and lets you select the inner type directly. The runtime keeps the wrapper shape so your result is still `{ data: { id: string } | null }`.

```ts
gql.query({
  findUserById: {
    id: 'u_1',
    include: { id: true, email: true }, // not { data: { include: { … } } }
  },
});
// Emits:  findUserById(id: $v1) { data { id email } }
```

### `__field` — aliasing

Call the same field with different arguments in one operation:

```ts
gql.query({
  admins:    { __field: 'users', where: { role: 'ADMIN' },    include: { id: true } },
  customers: { __field: 'users', where: { role: 'CUSTOMER' }, include: { id: true } },
});
// data.admins / data.customers — both typed
```

### `__on` — unions & interfaces

```ts
gql.query({
  search: {
    where: { q: 'jane' },
    include: {
      __typename: true,
      __on: {
        User:    { id: true, email: true },
        Patient: { id: true, mrn: true },
      },
    },
  },
});
```

### Array root — batched operations

Pass an array at the root and gqlx merges every part into **one** GraphQL operation — one round-trip, one cache key. Duplicate top-level keys throw at build time; disambiguate with `__field`.

```ts
gql.query([
  { context:  { settings: { where: { ... }, include: { id: true } } } },
  { identity: { users:    { where: { ... }, include: { id: true } } } },
]);
```

### Per-call `config`

Any root field can carry a `config` object — it flows through to the underlying transport (an `AxiosRequestConfig` for the axios adapter, folded into URL + headers for fetch):

```ts
gql.query({
  findContextSetting: {
    filter: { query: {} },
    include: { id: true },
    config: {
      params:  { zone: 'client' },
      headers: { 'x-debug': '1' },
    },
  },
});
```

You can also pass `signal` and a top-level `config` to `gql.query(selection, opts)`:

```ts
const controller = new AbortController();

await gql.query(
  { findUsers: { include: { id: true } } },
  { signal: controller.signal, config: { timeout: 5_000 } },
);
```

### Variables

Every argument is lifted to a typed `$variable`. **Never** inline user data into a query — gqlx handles it. JSON scalars pass through verbatim; do **not** pre-`JSON.stringify(props)`.

## CLI

```
gqlx init                       Scaffold gql.config.ts in the current directory
gqlx generate [--config <path>] Introspect endpoints and emit the typed client

Options:
  --config <path>   Path to config (default: ./gql.config.ts | .js | .mjs)
  --cwd <path>      Working directory (default: process.cwd())
  -h, --help        Show this help
```

Wire it into `package.json` so contributors get the same output:

```json
{
  "scripts": {
    "gql:gen": "gqlx generate",
    "postinstall": "gqlx generate"
  }
}
```

## Programmatic codegen

For build scripts that need finer control than the CLI offers:

```ts
import { introspect, mergeIntrospections, emit } from 'gqlx/codegen';

const parts = await Promise.all([
  introspect('http://localhost:3010/graphql'),
  introspect({ url: 'http://localhost:6050/graphql', headers: { 'x-internal': '1' } }),
]);

const schema = mergeIntrospections(parts);

emit({
  schema,
  outDir: './src/generated/gqlx',
  runtimePackage: 'gqlx',
});
```

## Custom output location

If you'd rather commit the generated code (review-able diffs, no `postinstall` step), set `output` in the config:

```ts
export default defineConfig({
  schemas: ['...'],
  output: './src/generated/gqlx',
});
```

Then import from your own path instead of the subpath:

```ts
import { createUseGql } from './generated/gqlx';
```

## How `gqlx/generated` resolves

By default `gqlx generate` writes to `node_modules/.gqlx/`. The package's `gqlx/generated` subpath is a thin shim that re-exports from `.gqlx`, and Node's module resolution walks up the tree to find it. Same trick Prisma uses for `@prisma/client`. Custom `output` paths bypass this entirely — you import directly from wherever you wrote them.

## Caveats

- **TypeScript recursion depth.** `Selected<T, S>` fans out per field. For very large schemas (thousands of types) you may hit TS2589; split the output per domain in that case.
- **No subscriptions yet.** The builder is shaped for it, but the transport layer doesn't ship a WebSocket adapter. Use a `transport: ...` function for now.
- **No fragment masking.** If you need `@graphql-codegen/client-preset`-style colocation, run both side-by-side — they don't conflict.

## License

[MIT](./LICENSE) © gqlx contributors
