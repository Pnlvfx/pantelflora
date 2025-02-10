import { findUnusedExports } from '@goatjs/node/ts-unused-exports';

const unused = findUnusedExports({
  ignoreFolders: ['.next'],
  ignoreFiles: ['next.config.ts', 'postcss.config.mjs', 'eslint.config.mjs'],
});

if (unused) {
  throw new Error(`The following exports are unused, add them on the ignore or remove the exports to continue.\n${JSON.stringify(unused)}`);
}
