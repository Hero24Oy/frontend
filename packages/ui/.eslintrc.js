const commonEslint = require('@hero24/configs/.eslintrc');

const overrides = {
  noMagicNumbersExceptions: {
    files: ['src/configs/*.ts'],
    rules: {
      'no-magic-numbers': 'off',
    },
  },
}

module.exports = {
  ...commonEslint,
  overrides: commonEslint.overrides.concat(Object.values(overrides)),
  parserOptions: {
    ...commonEslint.parserOptions,
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
};
