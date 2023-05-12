module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['jsdoc'],
  extends: ['alloy', 'plugin:jsdoc/recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    es2022: true,
  },
};
