module.exports = {
  plugins: ['simple-import-sort', 'prettier'],
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2021, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.tsx', '.ios.js', '.android.js', 'never'],
      },
    },
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': ['error', { usePrettierrc: true }], // Use our .prettierrc file as source
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
