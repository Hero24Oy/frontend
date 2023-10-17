const commonEslint = require('./.eslintrc-common');

module.exports = {
  ...commonEslint,
  parserOptions: {
    ...commonEslint.parserOptions,
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
};
