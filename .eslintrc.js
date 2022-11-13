module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    camelcase: 'off',
    'n/no-callback-literal': 'off',
    '@typescript-eslint/ban-types': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  }
}
