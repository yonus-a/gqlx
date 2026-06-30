export { createClient, type CallOptions, type GqlClient } from './runtime/factory.js';
export { createBuilder, type BuildResult } from './runtime/builder.js';
export { createTransport, type ClientOptions, type GqlRequest, type TransportFn } from './runtime/transport.js';
export type { Descriptors, FieldArgsMap, FieldTypesMap, WrappersMap } from './runtime/descriptors.js';
export type { Selected, MergeRoot, RequireKeys } from './runtime/inferred.js';

export { defineConfig, type GqlConfig } from './config.js';
