module.exports = {
  env: {
    commonjs: true,
    es6: true,
    mocha: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:chai-friendly/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 'off',
  },
};
