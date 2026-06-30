import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { createJiti } from 'jiti';

import { emit } from '../../codegen/emit.js';
import { introspect } from '../../codegen/introspect.js';
import { mergeIntrospections } from '../../codegen/merge.js';
import type { GqlConfig } from '../../config.js';

const CONFIG_CANDIDATES = ['gql.config.ts', 'gql.config.mts', 'gql.config.js', 'gql.config.mjs'];

export async function generate({ cwd, configPath }: { cwd: string; configPath?: string }) {
  const file = configPath ? resolve(cwd, configPath) : findConfig(cwd);
  if (!file) {
    console.error(`No gql.config found in ${cwd}. Run \`gqlx init\` first.`);
    process.exit(1);
  }

  const jiti = createJiti(import.meta.url, { interopDefault: true });
  const mod = (await jiti.import(file)) as GqlConfig | { default: GqlConfig };
  const config = (mod as { default?: GqlConfig }).default ?? (mod as GqlConfig);

  if (!config?.schemas?.length) {
    console.error('gql.config.ts must export a config with at least one schema endpoint.');
    process.exit(1);
  }

  console.log(`→ introspecting ${config.schemas.length} schema(s)…`);
  const parts = await Promise.all(config.schemas.map(introspect));
  const merged = mergeIntrospections(parts);

  const outDir = config.output ? resolve(cwd, config.output) : resolve(cwd, 'node_modules/.gqlx');
  console.log(`→ emitting to ${outDir}`);
  const { fileCount } = emit({
    schema: merged,
    outDir,
    scalars: config.scalars,
    freeSchemaFields: config.freeSchemaFields,
    runtimePackage: config.runtimePackage ?? 'gqlx',
  });

  console.log(`✓ wrote ${fileCount} files`);
}

function findConfig(cwd: string): string | null {
  for (const name of CONFIG_CANDIDATES) {
    const p = resolve(cwd, name);
    if (existsSync(p)) return p;
  }
  return null;
}
