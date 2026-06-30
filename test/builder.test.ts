#!/usr/bin/env tsx
/**
 * Smoke test for the builder. No network, no codegen output — feeds the
 * builder a hand-crafted descriptor set and asserts the emitted GraphQL
 * string + variable bag match expectations.
 *
 *   pnpm test
 */

import { createBuilder } from '../src/runtime/builder.js';
import type { Descriptors } from '../src/runtime/descriptors.js';

const DESC: Descriptors = {
  ROOT_QUERY_TYPE: 'Query',
  ROOT_MUTATION_TYPE: 'Mutation',
  FIELD_ARGS: {
    Query: {
      findAuthAptById: { id: 'String!' },
    },
    Mutation: {
      createAuthApt: { data: 'CreateAuthAptDto!' },
    },
  },
  FIELD_TYPES: {
    Query: {
      findAuthAptById: 'AuthAptDataSerializer',
    },
    Mutation: {
      createAuthApt: 'AuthAptDataSerializer',
    },
    AuthAptDataSerializer: {
      data: 'AuthApt',
    },
  },
  WRAPPERS: {
    AuthAptDataSerializer: { field: 'data', inner: 'AuthApt' },
  },
};

const build = createBuilder(DESC);

type Case = { name: string; run: () => { actual: unknown; expected: unknown } };

const norm = (s: string) => s.replace(/\s+/g, ' ').trim();

const cases: Case[] = [
  {
    name: 'simple query with required arg lifted to $variable',
    run: () => {
      const out = build('query', {
        findAuthAptById: { id: 'abc-123', include: { id: true, name: true } },
      });
      return {
        actual: { query: norm(out.query), variables: out.variables },
        expected: {
          query: 'query($v1: String!) { findAuthAptById(id: $v1) { data { id name } } }',
          variables: { v1: 'abc-123' },
        },
      };
    },
  },
  {
    name: 'mutation with complex input arg',
    run: () => {
      const out = build('mutation', {
        createAuthApt: { data: { name: 'apt-one' }, include: { id: true, name: true } },
      });
      return {
        actual: { query: norm(out.query), variables: out.variables },
        expected: {
          query: 'mutation($v1: CreateAuthAptDto!) { createAuthApt(data: $v1) { data { id name } } }',
          variables: { v1: { name: 'apt-one' } },
        },
      };
    },
  },
  {
    name: 'array-root merges into one operation',
    run: () => {
      const out = build('query', [{ findAuthAptById: { id: 'x', include: { id: true } } }]);
      return {
        actual: { query: norm(out.query), variables: out.variables },
        expected: {
          query: 'query($v1: String!) { findAuthAptById(id: $v1) { data { id } } }',
          variables: { v1: 'x' },
        },
      };
    },
  },
  {
    name: '__field aliasing on query',
    run: () => {
      const out = build('query', {
        a: { __field: 'findAuthAptById', id: 'x', include: { id: true } },
        b: { __field: 'findAuthAptById', id: 'y', include: { id: true } },
      });
      return {
        actual: { query: norm(out.query), variables: out.variables },
        expected: {
          query:
            'query($v1: String!, $v2: String!) { a: findAuthAptById(id: $v1) { data { id } } b: findAuthAptById(id: $v2) { data { id } } }',
          variables: { v1: 'x', v2: 'y' },
        },
      };
    },
  },
  {
    name: 'config flows through to BuildResult',
    run: () => {
      const out = build('query', {
        findAuthAptById: { id: 'x', include: { id: true }, config: { params: { zone: 'client' } } },
      });
      return {
        actual: out.config,
        expected: { params: { zone: 'client' } },
      };
    },
  },
  {
    name: 'empty selection throws',
    run: () => {
      let err: string | null = null;
      try {
        build('query', { findAuthAptById: { id: 'x', include: {} } });
      } catch (e) {
        err = (e as Error).message;
      }
      return { actual: !!err && err.includes('empty selection'), expected: true };
    },
  },
  {
    name: 'unknown arg throws',
    run: () => {
      let err: string | null = null;
      try {
        build('query', {
          findAuthAptById: { id: 'x', bogus: 1, include: { id: true } },
        });
      } catch (e) {
        err = (e as Error).message;
      }
      return { actual: !!err && err.includes('unknown arg "bogus"'), expected: true };
    },
  },
  {
    name: 'duplicate root key in array form throws',
    run: () => {
      let err: string | null = null;
      try {
        build('query', [
          { findAuthAptById: { id: 'x', include: { id: true } } },
          { findAuthAptById: { id: 'y', include: { id: true } } },
        ]);
      } catch (e) {
        err = (e as Error).message;
      }
      return { actual: !!err && err.includes('duplicate root field'), expected: true };
    },
  },
];

let failed = 0;
for (const c of cases) {
  try {
    const { actual, expected } = c.run();
    const ok = JSON.stringify(actual) === JSON.stringify(expected);
    if (ok) {
      console.log(`  ok  ${c.name}`);
    } else {
      failed++;
      console.log(`FAIL  ${c.name}`);
      console.log('      expected:', JSON.stringify(expected));
      console.log('      actual:  ', JSON.stringify(actual));
    }
  } catch (e) {
    failed++;
    console.log(`THROW ${c.name}: ${(e as Error).message}`);
  }
}
console.log(`\n${cases.length - failed}/${cases.length} passing`);
process.exit(failed ? 1 : 0);
