/**
 * Thin execution layer: hands the built {query, variables} to the existing
 * Wenex Platform GraphQL transport (`useApi(true).graphql.request`) so auth,
 * base URL, refresh tokens, and error normalization stay consistent with the
 * rest of the app.
 *
 * Swap the transport here (e.g. to ClientKit or a raw $fetch) without touching
 * the builder or composable.
 */

import type { AxiosRequestConfig } from 'axios';

export type GqlExecuteOptions = {
  /** Pass `true` to hit the platform endpoint (default). */
  platform?: boolean;
  /** Forwarded to the underlying axios call. */
  signal?: AbortSignal;
  /** Extra axios request config — `params`, `headers`, etc. */
  config?: AxiosRequestConfig;
};

export async function execute<T = unknown>(
  query: string,
  variables: Record<string, unknown>,
  opts: GqlExecuteOptions = {},
): Promise<T> {
  const api = useApi();
  // Both ClientKit and Platform expose `graphql.request({ query, variables })`.
  return api.graphql.request<T>({ query, variables }, { signal: opts.signal, ...opts.config });
}
