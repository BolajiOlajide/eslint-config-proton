# ESLINT-CONFIG-PROTON

An opinionated ESLint config made by Bolaji Olajide (@Proton). It is based on [Stephen Grider](https://github.com/StephenGrider)'s [RallyCoding configuration](https://github.com/StephenGrider/ESLint-Rallycoding).

## Installation

Installation is easy and can be done with the command:

```
$ npm install eslint-config-proton --save-dev
```
or
```
yarn add eslint-config-proton --dev
```

### Usage

Once installation is complete, create a `.eslintrc` file, this is where your project's eslint config is saved.
Add the following line to the file and you have the `eslint-proton-config` enabled for your project.

```
{
  "root": true,
  "extends": "proton",
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "allowImportExportEverywhere": true
 }
}
```

## LICENSE
MIT
