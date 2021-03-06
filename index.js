module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
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
    'babel'
  ],
  parser: 'babel-eslint',
  rules: {
    'babel/new-cap': 1,
    'babel/no-invalid-this': 1,
    'babel/object-curly-spacing': 0,
    'babel/quotes': 0,
    'babel/semi': 1,
    'babel/no-unused-expressions': 1,
    'strict': 0,
    'indent': ['warn', 2],
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
