import { findUnusedExports } from '@goatjs/ts-unused-exports';
import { rimraf } from '@goatjs/rimraf';
import { prettier } from '@goatjs/node/prettier';

await rimraf('.next');

const unused = await findUnusedExports({
  ignoreFolders: ['app'],
  ignoreFiles: ['next.config.ts', 'postcss.config.mjs', 'eslint.config.js'],
});

if (unused) {
  throw new Error(
    `The following exports are unused, add them on the ignore or remove the exports to continue.\n\n${await prettier.format(JSON.stringify(unused), {
      parser: 'json',
    })}`,
  );
}
