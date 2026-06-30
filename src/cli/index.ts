import { parseArgs } from 'node:util';

import { init } from './commands/init.js';
import { generate } from './commands/generate.js';

const HELP = `
gqlx — Prisma-style GraphQL client codegen

Usage:
  gqlx init                       Scaffold a gql.config.ts in the current directory
  gqlx generate [--config <path>] Introspect endpoints and emit the typed client

Options:
  --config <path>   Path to config (default: ./gql.config.ts | .js | .mjs)
  --cwd <path>      Working directory (default: process.cwd())
  -h, --help        Show this help
`.trim();

export async function main(argv: string[] = process.argv.slice(2)) {
  const [command, ...rest] = argv;

  if (!command || command === '-h' || command === '--help') {
    console.log(HELP);
    process.exit(command ? 0 : 1);
  }

  const { values } = parseArgs({
    args: rest,
    options: {
      config: { type: 'string' },
      cwd: { type: 'string' },
      help: { type: 'boolean', short: 'h' },
    },
    allowPositionals: true,
  });

  if (values.help) {
    console.log(HELP);
    return;
  }

  const cwd = values.cwd ? resolveFromProcess(values.cwd) : process.cwd();

  switch (command) {
    case 'init':
      await init({ cwd });
      return;
    case 'generate':
      await generate({ cwd, configPath: values.config });
      return;
    default:
      console.error(`Unknown command: ${command}\n`);
      console.error(HELP);
      process.exit(1);
  }
}

function resolveFromProcess(p: string): string {
  return p.startsWith('/') ? p : `${process.cwd()}/${p}`;
}

main().catch((err) => {
  console.error(err?.message ?? err);
  if (process.env.GQLX_DEBUG) console.error(err?.stack);
  process.exit(1);
});
