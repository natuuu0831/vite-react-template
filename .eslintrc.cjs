module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'import', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    /**セミコロン */
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }], //文の末尾にセミコロンを書くか書かないかを一貫させる
    'semi-spacing': ['error', { after: true, before: false }], //セミコロン前後の空白を一貫させる
    'no-extra-semi': 'error', //余分なセミコロンを禁止
    'no-unexpected-multiline': 'error', //意図に反して2つの文が接続された箇所を警告
    'no-unreachable': 'error', //到達できない文を警告
    // _から始まる使われていない変数を無視
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    //非nullアサーションをoff
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/jsx-key': 'off',
    'react/display-name': 'off',
    /**hooks */
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'off', // Checks effect dependencies
    /**一貫してstyled-components/macroをインポートされるようにする */
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro.',
          },
        ],
        patterns: ['!styled-components/macro'],
      },
    ],
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
          },
        ],
      },
    ],
  },
}
