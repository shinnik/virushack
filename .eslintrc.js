module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/prop-types': 'off',
    'react/no-unescape-entities': 'off'
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
