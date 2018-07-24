// Based off of the RallyCoding ESLint COnfiguration
// https://eslint.org/docs/rules/

module.exports = {
  rules: {
    // never require trailing commas - that's some typescript ish lol
    'comma-dangle': ['error', 'never'],

    // disallow assignment in conditional expressions
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // warn for use of console: this is because you might be using the
    // console statements temporarily, the red squiggly eslint lines
    // can be problematic for someone that has OCD for clean code 😄
    // https://eslint.org/docs/rules/no-console
    'no-console': 'warn',

    // disallow use of constant expressions in conditions
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'warn',

    // disallow control characters in regular expressions
    // https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'error',

    // disallow use of debugger
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',

    // disallow duplicate arguments in functions
    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',

    // disallow duplicate keys when creating object literals
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // disallow a duplicate case label.
    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // disallow empty statements
    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // disallow the use of empty character classes in regular expressions
    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // disallow assigning to the exception in a catch block
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // disallow double-negation boolean casts in a boolean context
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // disallow unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
    }],

    // disallow unnecessary semicolons
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',

    // disallow overwriting functions written as function declarations
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // disallow function or variable declarations in nested blocks
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // disallow invalid regular expression strings in the RegExp constructor
    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // disallow irregular whitespace outside of strings and comments
    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // disallow negation of the left operand of an in expression
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'off',

    // disallow the use of object properties of the global object (Math and JSON) as functions
    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'error',

    // disallow use of Object.prototypes builtins directly
    // http://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // disallow multiple spaces in a regular expression literal
    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // disallow sparse arrays
    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // http://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'warn',

    // Avoid code that looks like two expressions but is actually one
    // http://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // disallow unreachable statements after a return, throw, continue, or break statement
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // disallow return/throw/break/continue inside finally blocks
    // http://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // disallow negating the left operand of relational operators
    // http://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // disallow comparisons with the value NaN
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': 'error',

    // ensure JSDoc comments are valid
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // ensure that the results of typeof are compared against a valid string
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': 'error'
  }
};
