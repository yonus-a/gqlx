/**
 * Object → GraphQL query string + variables.
 *
 * The builder walks a Prisma-style nested selection object, emits a valid
 * GraphQL operation, and lifts every argument to a `$variable`. It never
 * inlines user data into the query string — variables are typed using the
 * `FIELD_ARGS` descriptor, so the result is identical to what a hand-written
 * query would send.
 *
 * Selection vs. arguments is disambiguated by reserved keys:
 *   - `include`   nested sub-selection
 *   - `__field`   alias escape hatch (query the same field twice w/ diff args)
 *   - `__on`      inline fragment selection for unions / interfaces
 *   - `__typename` virtual field, always emitted as `__typename`
 *   - `config`    per-call transport config (merged, not sent to server)
 * Everything else listed in `FIELD_ARGS[parent][field]` is an argument.
 */

import type { AxiosRequestConfig } from 'axios';
import type { Descriptors } from './descriptors.js';

export type BuildResult = {
  query: string;
  variables: Record<string, unknown>;
  /** Merged AxiosRequestConfig from any root field that declared `config: { … }`. */
  config?: AxiosRequestConfig;
};

const RESERVED = new Set(['include', '__field', '__on', '__typename', 'config']);

function mergeConfigs(a: AxiosRequestConfig | undefined, b: AxiosRequestConfig | undefined): AxiosRequestConfig | undefined {
  if (!a) return b;
  if (!b) return a;
  return {
    ...a,
    ...b,
    params: { ...(a.params ?? {}), ...(b.params ?? {}) },
    headers: { ...(a.headers ?? {}), ...(b.headers ?? {}) } as AxiosRequestConfig['headers'],
  };
}

function mergeRoot(root: unknown): Record<string, unknown> {
  if (!Array.isArray(root)) return root as Record<string, unknown>;
  const out: Record<string, unknown> = {};
  for (const part of root) {
    for (const [k, v] of Object.entries(part as Record<string, unknown>)) {
      if (k in out) throw new Error(`[gqlx] duplicate root field "${k}" — use __field alias to disambiguate.`);
      out[k] = v;
    }
  }
  return out;
}

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

export function createBuilder(desc: Descriptors) {
  const { FIELD_ARGS, FIELD_TYPES, WRAPPERS, ROOT_QUERY_TYPE, ROOT_MUTATION_TYPE } = desc;

  return function build(op: 'query' | 'mutation', root: unknown): BuildResult {
    const variables: Record<string, unknown> = {};
    const varDefs: string[] = [];
    let mergedConfig: AxiosRequestConfig | undefined;
    let counter = 0;

    const pushVar = (gqlType: string, value: unknown): string => {
      const name = `v${++counter}`;
      variables[name] = value;
      varDefs.push(`$${name}: ${gqlType}`);
      return `$${name}`;
    };

    function emitArgs(parentType: string, field: string, node: Record<string, unknown>): string {
      const argMap = FIELD_ARGS[parentType]?.[field] ?? {};
      const parts: string[] = [];
      for (const [k, v] of Object.entries(node)) {
        if (RESERVED.has(k)) continue;
        const gqlType = argMap[k];
        if (!gqlType) throw new Error(`[gqlx] unknown arg "${k}" on ${parentType}.${field}.`);
        parts.push(`${k}: ${pushVar(gqlType, v)}`);
      }
      return parts.length ? `(${parts.join(', ')})` : '';
    }

    function emitSelection(parentType: string, sel: Record<string, unknown>): string {
      const parts: string[] = [];
      for (const [key, val] of Object.entries(sel)) {
        if (key === '__typename') {
          if (val) parts.push('__typename');
          continue;
        }
        if (key === '__on' && isPlainObject(val)) {
          for (const [typeName, subSel] of Object.entries(val)) {
            if (!isPlainObject(subSel)) continue;
            parts.push(`... on ${typeName} ${emitSelection(typeName, subSel)}`);
          }
          continue;
        }
        if (val === false || val == null) continue;
        if (val === true) {
          parts.push(key);
          continue;
        }
        if (!isPlainObject(val)) {
          throw new Error(`[gqlx] selection for "${parentType}.${key}" must be true | object, got ${typeof val}.`);
        }
        const realField = typeof val.__field === 'string' ? val.__field : key;
        const alias = realField !== key ? `${key}: ` : '';
        if (val.config !== undefined) {
          mergedConfig = mergeConfigs(mergedConfig, val.config as AxiosRequestConfig);
        }
        const args = emitArgs(parentType, realField, val);
        const child = FIELD_TYPES[parentType]?.[realField];
        let sub = '';
        if (val.include !== undefined || val.__on !== undefined || val.__typename) {
          if (!child) {
            throw new Error(`[gqlx] "${parentType}.${realField}" is a leaf field — remove its include/__on.`);
          }
          const wrap = WRAPPERS[child];
          let includeShape = (val.include as Record<string, unknown>) ?? {};
          if (wrap && !(wrap.field in includeShape)) {
            includeShape = { [wrap.field]: { include: includeShape } };
          }
          const inner: Record<string, unknown> = { ...includeShape };
          if (val.__on) inner.__on = val.__on;
          if (val.__typename) inner.__typename = val.__typename;
          sub = ` ${emitSelection(child, inner)}`;
        }
        parts.push(`${alias}${realField}${args}${sub}`);
      }
      if (!parts.length) {
        throw new Error(`[gqlx] empty selection on "${parentType}" — GraphQL requires at least one field.`);
      }
      return `{ ${parts.join(' ')} }`;
    }

    const rootType = op === 'query' ? ROOT_QUERY_TYPE : ROOT_MUTATION_TYPE;
    if (!rootType) throw new Error(`[gqlx] schema has no ${op} root.`);
    const body = emitSelection(rootType, mergeRoot(root));
    const header = varDefs.length ? `(${varDefs.join(', ')})` : '';
    return { query: `${op}${header} ${body}`, variables, config: mergedConfig };
  };
}
