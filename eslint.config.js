import { defineConfig, globalIgnores } from 'eslint/config'

import globals from 'globals'

import js from '@eslint/js'

import parser from '@typescript-eslint/parser'
import ts from '@typescript-eslint/eslint-plugin'

import prettier from 'eslint-plugin-prettier'

export default defineConfig([
  globalIgnores(['node_modules', 'dist', 'uploads', 'coverage']),
  {
    files: ['**/*.ts'],
    plugins: {
      prettier,
      '@typescript-eslint': ts
    },
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
      },
      globals: {
        ...globals.node,
        ...globals.es2022
      }
    },
    rules: {
      ...ts.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      ...js.configs.recommended.rules
    }
  }
])
