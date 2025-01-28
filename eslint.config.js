import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-plugin-prettier';
import eslintPluginNode from 'eslint-plugin-node';
import eslintPluginImport from 'eslint-plugin-import';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: eslintPluginPrettier,
      node: eslintPluginNode,
      import: eslintPluginImport
    },
    rules: {
      'prettier/prettier': 'error',
      'node/no-unsupported-features/es-syntax': 'off',
      'node/no-missing-import': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    },
    settings: {
      node: {
        'tryExtensions': ['.js', '.json', '.node', '.ts', '.d.ts']
      }
    },
    ignores: ['node_modules/', 'dist/', 'build/']
  }
]