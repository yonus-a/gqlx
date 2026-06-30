import type { IntrospectSource } from './codegen/introspect.js';

export interface GqlConfig {
  /**
   * One or more GraphQL endpoints to introspect. Multiple schemas are merged
   * into a single client (root-field collisions throw at codegen time).
   */
  schemas: IntrospectSource[];
  /**
   * Where to write generated files. Defaults to `node_modules/.gqlx`, which
   * works out of the box with `import { defineClient } from 'gqlx/generated'`.
   */
  output?: string;
  /** Override scalar → TS mappings. Merged onto defaults (String, Int, …). */
  scalars?: Record<string, string>;
  /**
   * Field paths whose TS type should be `JsonObject` regardless of GraphQL kind.
   * Wildcards: `"*.props"` matches any parent. Default: `["*.props", "*.metadata"]`.
   */
  freeSchemaFields?: string[];
  /**
   * The npm package the generated `client.ts` imports `createUseGql` from.
   * Override if you've wrapped this library. Default: `"gqlx"`.
   */
  runtimePackage?: string;
}

/**
 * Identity helper for IntelliSense on `gql.config.ts`.
 */
export function defineConfig(config: GqlConfig): GqlConfig {
  return config;
}
