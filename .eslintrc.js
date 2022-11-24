module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
    'storybook',
    '@emotion',
    'jest',
  ],
  root: true,
  rules: {
    '@typescript-eslint/no-non-null-assertion': 0,
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['css'],
      },
    ],
    'react/function-component-definition': 0,
    '@emotion/jsx-import': [2, { runtime: 'automatic' }],
    'import/no-unresolved': 0,
    'react/jsx-props-no-spreading': 1,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'import/prefer-default-export': 1,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/*.storybook/**/*.*'],
        peerDependencies: true,
      },
    ],
    'object-shorthand': 0,
  },
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'react/jsx-props-no-spreading': 0,
      },
    },
  ],
};
