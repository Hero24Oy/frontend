const commonEslint = require('@hero24/configs/.eslintrc');

module.exports = {
  ...commonEslint,
  overrides: commonEslint.overrides,
  parserOptions: {
    ...commonEslint.parserOptions,
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
};
