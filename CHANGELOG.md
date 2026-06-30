# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] — 2026-06-30

First public release. The project is repackaged from an in-repo client/codegen
pair into a standalone, publishable npm package: `gqlx`.

### Added

- **`gqlx` CLI** — installable binary (`bin/gqlx.mjs`) wired through
  `src/cli/index.ts` with `parseArgs` dispatch.
  - `gqlx init` — scaffolds `gql.config.ts` from `templates/gql.config.ts`.
  - `gqlx generate` — introspects every endpoint and writes the typed client.
  - `--config <path>`, `--cwd <path>`, `-h/--help` flags.
- **`defineConfig` + `GqlConfig`** (`src/config.ts`) — typed configuration
  helper with options for `schemas`, `output`, `scalars`, `freeSchemaFields`,
  and `runtimePackage`.
- **Modular codegen** under `src/codegen/` — replaces the monolithic
  `scripts/gen-gql.ts`:
  - `introspect.ts` — endpoint → introspection (axios + `graphql.getIntrospectionQuery`).
  - `merge.ts` — multi-endpoint merge with root-field collision detection.
  - `emit.ts` — introspection → TS files in `outDir`.
  - `types.ts` — shared introspection types.
  - `index.ts` — public re-exports for programmatic use (`gqlx/codegen`).
- **Runtime package** under `src/runtime/`:
  - `factory.ts` — `createClient(descriptors, options)` returning
    `{ query, mutate }`; per-call `signal` + `config` support.
  - `transport.ts` — three transport shapes: axios (default), `fetch`
    (opt-in), and custom `transport: (req) => Promise`. Header functions,
    existing `AxiosInstance` reuse, and per-call `config` merging.
  - `builder.ts` — object → `{ query, variables, config }`; auto-lifts every
    argument to a `$variable`.
  - `descriptors.ts` — shape codegen emits and the builder consumes.
  - `inferred.ts` — `Selected<T, S>` / `MergeRoot` type machinery (moved
    from `src/gql-client/runtime/`).
- **`gqlx/generated` subpath** (`src/generated-shim.ts`) — re-exports from
  `node_modules/.gqlx/`, the Prisma-style resolution trick so users can
  `import { createUseGql } from 'gqlx/generated'` with zero config.
- **Public entry point** (`src/index.ts`) — re-exports `createClient`,
  `createBuilder`, `createTransport`, `defineConfig`, and the shared types.
- **Multi-endpoint support** — multiple GraphQL services merge into a single
  typed client; root-field collisions throw at codegen time.
- **Wrapper unwrap** — `{ items: [...] }` / `{ data: ... }` single-field
  serializers detected at codegen so call sites select the inner type
  directly while the response keeps the wrapper shape.
- **`__on` selections** — typed inline fragments for unions and interfaces.
- **Array-root batching** — passing an array of selections merges into a
  single GraphQL operation (one round-trip, one cache key).
- **Per-call `config`** — root-field `config` (an `AxiosRequestConfig`)
  flows through the builder into the transport.
- **Free-schema fields** — `freeSchemaFields` config (default
  `['*.props', '*.metadata']`) types matching fields as `JsonObject`.
- **`README.md`** — full public documentation with quickstart, transport
  options, selection DSL reference, CLI reference, and programmatic codegen.
- **`CHANGELOG.md`** (this file).
- **pnpm workspace** (`pnpm-workspace.yaml`).

### Changed

- **`package.json`** — repackaged as a publishable library:
  - `"name": "gqlx"`, `"version": "0.1.0"`, MIT license.
  - `"type": "module"` ESM output.
  - `exports` map for `.`, `./generated`, `./codegen`.
  - `bin.gqlx` → `./bin/gqlx.mjs`.
  - `files` whitelist: `dist`, `bin`, `templates`.
  - Dependencies trimmed to `axios`, `graphql`, `jiti`.
  - Engines: `node >=18.17`.
- **`tsconfig.json`** — emits to `dist/` with declaration files for
  publishing; previously was a no-emit dev config.
- **Test harness** — `scripts/test-gql-builder.ts` moved to
  `test/builder.test.ts`; refreshed to exercise the new runtime API.
- **Codegen entry** — `scripts/gen-gql.ts` rewritten and relocated to
  `src/codegen/emit.ts`; now a library function rather than a script.

### Removed

- **`src/gql-client/`** — the in-repo runtime; replaced by `src/runtime/`
  and shipped as part of the published package.
- **`src/gql/`** — the in-repo generated client (`gql.ts`, `graphql.ts`,
  `index.ts`); generated output now lives in `node_modules/.gqlx/` per user
  install, not in the library repo.
- **`graphql.schema.json`** — bundled introspection snapshot for a single
  consumer; users now introspect their own endpoints via the CLI.
- **`codegen.ts`** — legacy root entry replaced by `src/cli/index.ts`.
- **`package-lock.json`** — superseded by `pnpm-lock.yaml`.

### Migration notes

This release moves the codebase from a private in-repo tool to a published
library. There is no upgrade path from pre-0.1.0 internal usage — adopt the
public API:

1. `npm install gqlx`.
2. `npx gqlx init`, edit `gql.config.ts`, `npx gqlx generate`.
3. Replace `import { ... } from 'src/gql-client'` with
   `import { createUseGql } from 'gqlx/generated'`.

[1.0.0]: https://github.com/<owner>/gqlx/releases/tag/v0.1.0
