const commonEslint = require('../hero24-common/.eslintrc.js');

const importRules = {
  'import/no-extraneous-dependencies': [
    // this rule doesn't work for scripts folder if it is in common config
    'error',
    { devDependencies: ['**/scripts/**/*.ts'] },
  ],
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
