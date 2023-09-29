const commonEslint = require('../hero24-common-library/.eslintrc-common');

const importRules = {
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
};

module.exports = {
  ...commonEslint,
  parserOptions: {
    ...commonEslint.parserOptions,
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  rules: {
    ...commonEslint.rules,
    ...importRules,
  },
};
