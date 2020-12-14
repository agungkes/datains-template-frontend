module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'module-resolver',
    'import',
  ],
  rules: {
    'require-jsdoc': 0,
    'react/prop-types': 0,
    'sort-imports': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'object-curly-spacing': [1, 'always'],
    'react/react-in-jsx-scope': 'off',
  },
  globals: {
    React: 'writable',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        '@components': './components/',
        '@pages': './pages/',
      },
    },
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment',
      version: 'detect',
    },
  },
};
