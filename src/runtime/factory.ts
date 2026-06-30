/**
 * The user-facing factory. Generated code calls this once with the
 * descriptors and the user's transport options to produce a fully typed
 * `useGql.query` / `useGql.mutate` pair.
 */

import type { AxiosRequestConfig } from 'axios';

import { createBuilder } from './builder.js';
import { createTransport, type ClientOptions } from './transport.js';
import type { Descriptors } from './descriptors.js';
import type { MergeRoot, Selected } from './inferred.js';

type RootShape<R> = R | readonly R[];

type InferRoot<S, Root> = {
  [K in keyof MergeRoot<S> & keyof Root]: Selected<Root[K], MergeRoot<S>[K]>;
};

export type CallOptions = {
  signal?: AbortSignal;
  config?: AxiosRequestConfig;
};

function mergeConfig(a?: AxiosRequestConfig, b?: AxiosRequestConfig): AxiosRequestConfig | undefined {
  if (!a) return b;
  if (!b) return a;
  return {
    ...a,
    ...b,
    params: { ...(a.params ?? {}), ...(b.params ?? {}) },
    headers: { ...(a.headers ?? {}), ...(b.headers ?? {}) } as AxiosRequestConfig['headers'],
  };
}

export interface GqlClient<Query, Mutation, QuerySelect, MutationSelect> {
  query<S extends RootShape<QuerySelect>>(selection: S, opts?: CallOptions): Promise<InferRoot<S, Query>>;
  mutate<S extends RootShape<MutationSelect>>(selection: S, opts?: CallOptions): Promise<InferRoot<S, Mutation>>;
}

export function createClient<Query, Mutation, QuerySelect, MutationSelect>(
  descriptors: Descriptors,
  options: ClientOptions,
): GqlClient<Query, Mutation, QuerySelect, MutationSelect> {
  const build = createBuilder(descriptors);
  const transport = createTransport(options);

  return {
    async query(selection, opts) {
      const { query, variables, config } = build('query', selection);
      return transport({ query, variables, config: mergeConfig(opts?.config, config), ...opts });
    },
    async mutate(selection, opts) {
      const { query, variables, config } = build('mutation', selection);
      return transport({ query, variables, config: mergeConfig(opts?.config, config), ...opts });
    },
  };
}
