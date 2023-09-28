// We need delete this script after publish in npm

import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';

import { packageRootDir } from './constants';

const commonDir = path.join(__dirname, '../../hero24-common-library');
const packageDir = path.join(packageRootDir, 'common-library');

const commonSrc = path.join(commonDir, 'src');
const packageSrc = path.join(packageDir, 'src');

const commonIndex = path.join(commonDir, 'index.ts');
const packageIndex = path.join(packageDir, 'index.ts');

const commonTsConfig = path.join(commonDir, 'common-tsconfig.json');
const packageTsConfig = path.join(packageDir, 'common-tsconfig.json');

const commonPrettier = path.join(commonDir, '.prettierrc.js');
const packagePrettier = path.join(packageDir, '.prettierrc.js');

const commonLinter = path.join(commonDir, '.eslintrc.js');
const packageLinter = path.join(packageDir, '.eslintrc.js');

const commonBabel = path.join(commonDir, 'babel.config.js');
const packageBabel = path.join(packageDir, 'babel.config.js');

try {
  if (!fs.existsSync(packageRootDir)) {
    fs.mkdirSync(packageRootDir);
  }

  if (!fs.existsSync(packageDir)) {
    fs.mkdirSync(packageDir);
  }

  fse.copySync(commonSrc, packageSrc, { overwrite: true });
  fse.copySync(commonIndex, packageIndex, { overwrite: true });
  fse.copySync(commonTsConfig, packageTsConfig, { overwrite: true });
  fse.copySync(commonPrettier, packagePrettier, { overwrite: true });
  fse.copySync(commonLinter, packageLinter, { overwrite: true });
  fse.copySync(commonBabel, packageBabel, { overwrite: true });
} catch (err) {
  console.error(err);
}
