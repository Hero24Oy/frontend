const commonEslint = require('../hero24-common-library/.eslintrc-common');

module.exports = {
  ...commonEslint,
  parserOptions: {
    ...commonEslint.parserOptions,
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
};
