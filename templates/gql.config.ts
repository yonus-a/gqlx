import { defineConfig } from 'gqlx';

export default defineConfig({
  // One or more GraphQL endpoints. Schemas are merged into a single client.
  // Use the object form to pass headers (e.g. an introspection-only token).
  schemas: [
    'http://localhost:3010/graphql',
    // { url: 'http://localhost:6050/graphql', headers: { 'x-internal': '1' } },
  ],

  // Where generated files are written. The default uses Prisma-style
  // node_modules placement so `import { defineClient } from 'gqlx/generated'`
  // just works. Set a path in your `src/` if you'd rather check it in.
  // output: './src/generated/gqlx',

  // Add domain scalars here so they get a real TS type instead of `unknown`.
  // scalars: { BigInt: 'string', Decimal: 'string' },

  // Fields with dynamic shape — typed as JsonObject, not introspectable further.
  // Wildcard parent: `"*.props"` matches every parent type.
  // freeSchemaFields: ['*.props', '*.metadata'],
});
