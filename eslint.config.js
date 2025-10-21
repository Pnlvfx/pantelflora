import { defineConfig, globalIgnores } from '@eslint/config-helpers';
import { nextConfigs } from '@goatjs/nextjs-eslint';

export default defineConfig([
  globalIgnores(['dist', '.yarn', '.vercel', '.next', 'next-env.d.ts']),
  ...nextConfigs({ tsconfigRootDir: import.meta.dirname }),
]);
