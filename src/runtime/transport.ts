/**
 * Transport layer. Three shapes:
 *
 *   1. Custom function:
 *        { transport: async ({ query, variables, config }) => data }
 *      Use this to bridge to an existing SDK (auth, refresh, base URL, etc.).
 *
 *   2. Built-in axios (default when `endpoint` is given):
 *        { endpoint, headers?, axios? }
 *      `axios` can be an existing AxiosInstance — handy when the app already
 *      configured interceptors. Per-call `config` is merged into the request.
 *
 *   3. Built-in fetch (opt-in):
 *        { endpoint, adapter: 'fetch', headers? }
 *      For environments where axios isn't desirable. `config.params` is folded
 *      into the URL; `config.headers` merges with defaults.
 */

import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export type GqlRequest = {
  query: string;
  variables: Record<string, unknown>;
  config?: AxiosRequestConfig;
};

export type TransportFn = <T = unknown>(req: GqlRequest) => Promise<T>;

export type ClientOptions =
  | {
      /** Bring your own transport — full control over how the request is sent. */
      transport: TransportFn;
    }
  | {
      endpoint: string;
      adapter?: 'axios';
      headers?: Record<string, string> | (() => Record<string, string> | Promise<Record<string, string>>);
      /** Pass an existing AxiosInstance to inherit interceptors. */
      axios?: AxiosInstance;
    }
  | {
      endpoint: string;
      adapter: 'fetch';
      headers?: Record<string, string> | (() => Record<string, string> | Promise<Record<string, string>>);
      /** Override the global fetch (e.g. node-fetch, undici). */
      fetch?: typeof fetch;
    };

type GraphQLResponse<T> = { data?: T; errors?: Array<{ message: string; path?: (string | number)[] }> };

function isCustom(opts: ClientOptions): opts is { transport: TransportFn } {
  return 'transport' in opts;
}

async function resolveHeaders(
  h?: Record<string, string> | (() => Record<string, string> | Promise<Record<string, string>>),
): Promise<Record<string, string>> {
  if (!h) return {};
  return typeof h === 'function' ? await h() : h;
}

function unwrap<T>(payload: GraphQLResponse<T>): T {
  if (payload.errors?.length) {
    const msg = payload.errors.map((e) => e.message).join('; ');
    throw new Error(`[gqlx] GraphQL error: ${msg}`);
  }
  return payload.data as T;
}

export function createTransport(opts: ClientOptions): TransportFn {
  if (isCustom(opts)) return opts.transport;

  if (opts.adapter === 'fetch') {
    const f = opts.fetch ?? fetch;
    return async <T,>({ query, variables, config }: GqlRequest): Promise<T> => {
      const headers = { 'content-type': 'application/json', ...(await resolveHeaders(opts.headers)), ...(config?.headers ?? {}) };
      const url = new URL(opts.endpoint);
      if (config?.params) {
        for (const [k, v] of Object.entries(config.params)) url.searchParams.set(k, String(v));
      }
      const res = await f(url.toString(), {
        method: 'POST',
        headers: headers as HeadersInit,
        body: JSON.stringify({ query, variables }),
        signal: config?.signal as AbortSignal | undefined,
      });
      if (!res.ok) throw new Error(`[gqlx] HTTP ${res.status} ${res.statusText}`);
      return unwrap<T>((await res.json()) as GraphQLResponse<T>);
    };
  }

  const instance = opts.axios ?? axios.create();
  return async <T,>({ query, variables, config }: GqlRequest): Promise<T> => {
    const headers = { ...(await resolveHeaders(opts.headers)), ...(config?.headers ?? {}) };
    const res = await instance.request<GraphQLResponse<T>>({
      url: opts.endpoint,
      method: 'POST',
      data: { query, variables },
      ...config,
      headers,
    });
    return unwrap<T>(res.data);
  };
}
