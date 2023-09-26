// We need delete this script after publish in npm

import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';

const commonDir = path.join(__dirname, '../../hero24-common');
const packageDir = path.join(__dirname, '../node_modules/hero24-common');

const commonTsConfig = path.join(commonDir, 'common-tsconfig.json');
const packageTsConfig = path.join(packageDir, 'common-tsconfig.json');

const commonPrettier = path.join(commonDir, '.prettierrc.js');
const packagePrettier = path.join(packageDir, '.prettierrc.js');

const commonLinter = path.join(commonDir, '.eslintrc.js');
const packageLinter = path.join(packageDir, '.eslintrc.js');

try {
  if (!fs.existsSync(packageDir)) {
    fs.mkdirSync(packageDir);
  }

  fse.copySync(commonTsConfig, packageTsConfig, { overwrite: true });
  fse.copySync(commonPrettier, packagePrettier, { overwrite: true });
  fse.copySync(commonLinter, packageLinter, { overwrite: true });
} catch (err) {
  console.error(err);
}
