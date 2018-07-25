module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/react-a11y',
    './rules/react',
    './rules/strict',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 7,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    mocha: true,
    jest: true
  },
  plugins: [
    'class-property'
  ],
  parser: 'babel-eslint',
  rules: {
    'strict': 0,
    'react/jsx-no-bind': 0,
    'indent': ['warn', 2],
    'react/prefer-es6-class': ['error', 'always'],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'react/jsx-indent': 0,
    'react/no-string-refs': 0,
    'no-shadow': [1, { 'allow': ['req', 'res', 'err'] }],
    'require-jsdoc': [1, {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': true,
        'ClassDeclaration': true
      }
    }],
    'valid-jsdoc': [1, {
      'requireReturn': true,
      'requireReturnType': true,
      'requireParamDescription': true,
      'requireReturnDescription': true
    }],
    'react/jsx-filename-extension': 0,
    'react/jsx-indent-props': 0,
    'react/prop-types': 0,
    'react/no-did-mount-set-state': 0,
    'react/prefer-stateless-function': 0,
    'no-trailing-spaces': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'no-multi-spaces': [2, {
      exceptions: {
        ImportDeclaration: true
      }
    }],
    'no-multi-str': 0,
    'id-length': 0,
    'comma-dangle': 0,
    'new-cap': 0,
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'func-names': 0,
    'consistent-return': 0,
    'no-use-before-define': 0,
    'no-debugger': 0,
    'spaced-comment': 0,
    'no-console': 1,
    'no-alert': 0,
    'linebreak-style': 0,
    // opinionated but for readability purposes the length of a single line
    // shouldn't be more than 100 characters
    'max-len': [2, 100, 2],
    'no-param-reassign': 0,
    'no-restricted-syntax': [2, 'WithStatement'],
    'import/no-extraneous-dependencies': [
      2,
      {
        'devDependencies': true,
        'optionalDependencies': false,
        'peerDependencies': false
      }
    ]
  }
};
