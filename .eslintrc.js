module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-console': ['error', { allow: ['info', 'error'] }]
  }
}
