import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist'], // Ignore dist folders across all workspaces
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: ['./packages/library/tsconfig.lib.json', './packages/playground/tsconfig.app.json'], // Point to workspace-specific tsconfig files
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    overrides: [
      // Library-specific rules
      {
        files: ['packages/library/**/*.{ts,tsx}'],
        rules: {
          // Library-specific rules can go here if needed
        },
      },
      // Playground-specific rules
      {
        files: ['packages/playground/**/*.{ts,tsx}'],
        rules: {
          // Playground-specific rules can go here if needed
        },
      },
    ],
  },
];
