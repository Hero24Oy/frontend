const commonEslint = require('./src/@hero24/common-library/.eslintrc');

module.exports = {
  ...commonEslint,
  parserOptions: {
    ...commonEslint.parserOptions,
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
};
