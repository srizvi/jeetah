module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'prettier',
  ],

  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'prettier',
    'unicorn',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'prettier/prettier': 'error',
    semi: ['error', 'always'],
    'comma-style': ['error', 'last'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: true,
      },
    ],
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/jsx-key': 'error',
    'react/self-closing-comp': 'error',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
};
