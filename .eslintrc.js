module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 1,
    'react/function-component-definition': 0,
    'import/no-extraneous-dependencies': 'off',
  },
};
