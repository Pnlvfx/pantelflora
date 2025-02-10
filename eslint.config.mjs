import { FlatCompat } from '@eslint/eslintrc';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
// import tailwind from 'eslint-plugin-tailwindcss';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  { ignores: ['**/.DS_Store', '**/*.css'] },
  unicorn.configs['flat/all'],
  sonarjs.configs.recommended,
  // ...tailwind.configs['flat/recommended'],
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ),
  ...compat.plugins('eslint-plugin-react-compiler', 'eslint-plugin-no-inline-styles'),
  ...compat.config({
    parser: '@typescript-eslint/parser',
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      browser: true,
      React: true,
    },
    rules: {
      'react/no-array-index-key': 'error',
      'react/prefer-read-only-props': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'no-inline-styles/no-inline-styles': 'warn',
      '@typescript-eslint/prefer-readonly': 'error',
      'react-compiler/react-compiler': 'error',
      'react/jsx-no-literals': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'no-console': 'warn',
      'sonarjs/todo-tag': 'warn',

      'unicorn/prevent-abbreviations': 'off',
      'unicorn/catch-error-name': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      // 'tailwindcss/classnames-order': 'off',
    },
  }),
];

export default eslintConfig;
