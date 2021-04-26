module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'ignore'
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace|disableYellowBox|tron)$/]",
        message: 'Unexpected property on console object was called'
      }
    ],
    'react/no-unescaped-entities': ['error', { forbid: ['>', '"', '}'] }],
    'react/prop-types': [
      0,
      { ignore: ['action', 'dispatch', 'nav', 'navigation'] }
    ],
    'react/display-name': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        noSortAlphabetically: true
      }
    ]
  },
};
