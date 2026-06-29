import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: ['http://localhost:3010/graphql', 'http://localhost:6050/graphql'],
  generates: {
    'graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
