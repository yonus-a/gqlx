import { getIntrospectionQuery } from 'graphql';
import axios from 'axios';

import type { Introspection } from './types.js';

export type IntrospectSource =
  | string
  | {
      url: string;
      headers?: Record<string, string>;
    };

export async function introspect(source: IntrospectSource): Promise<Introspection> {
  const url = typeof source === 'string' ? source : source.url;
  const headers = typeof source === 'string' ? {} : (source.headers ?? {});
  const query = getIntrospectionQuery({ descriptions: false });

  const res = await axios.post(
    url,
    { query },
    { headers: { 'content-type': 'application/json', ...headers }, timeout: 30_000 },
  );
  const payload = res.data as { data?: Introspection; errors?: Array<{ message: string }> };
  if (payload.errors?.length) {
    throw new Error(`[gqlx] introspection failed for ${url}: ${payload.errors.map((e) => e.message).join('; ')}`);
  }
  if (!payload.data?.__schema) {
    throw new Error(`[gqlx] introspection returned no __schema for ${url}`);
  }
  return payload.data;
}
