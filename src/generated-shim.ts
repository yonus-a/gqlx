// Subpath entry: `import { defineClient } from 'gqlx/generated'`.
//
// Default codegen output is `node_modules/.gqlx/`. From this file's runtime
// location (`node_modules/gqlx/dist/generated-shim.js`), Node's resolver walks
// up the tree and finds `node_modules/.gqlx`. If you customize `output` in
// `gql.config.ts`, import from that path directly instead of from this subpath.

// @ts-expect-error — `.gqlx` is materialized by `gqlx generate` in the consumer project.
export * from '.gqlx';
