import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
// dist/cli/commands → ../../../templates
const TEMPLATE = resolve(HERE, '../../../templates/gql.config.ts');

export async function init({ cwd }: { cwd: string }) {
  const dest = resolve(cwd, 'gql.config.ts');
  if (existsSync(dest)) {
    console.error(`gql.config.ts already exists at ${dest} — refusing to overwrite.`);
    process.exit(1);
  }

  mkdirSync(cwd, { recursive: true });
  copyFileSync(TEMPLATE, dest);
  console.log(`✓ created ${dest}`);

  console.log('\nNext: edit gql.config.ts, then run `npx gqlx generate`.');
}
