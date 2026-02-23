import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript + React files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        // Browser globals
        React: 'readonly',
        window: 'readonly',
        setTimeout: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-x': reactX,
      'react-dom': reactDom,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      // TypeScript
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',

      // React-x (ESLint 10 compatible React rules)
      ...reactX.configs['recommended-typescript'].rules,

      // React DOM
      ...reactDom.configs.recommended.rules,
      'react-dom/no-dangerously-set-innerhtml': 'off',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // Ignore build output
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
];

export default eslintConfig;
