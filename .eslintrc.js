module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['jsdoc', 'prettier'],
  extends: ['alloy', 'plugin:jsdoc/recommended', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
