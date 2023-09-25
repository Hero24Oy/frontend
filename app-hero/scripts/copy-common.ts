import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';

const commonDir = path.join(__dirname, '../../hero24-common');
const packageDir = path.join(__dirname, '../node_modules/hero24-common');

const commonSrc = path.join(commonDir, 'src');
const packageSrc = path.join(packageDir, 'src');

try {
  if (!fs.existsSync(packageDir)) {
    fs.mkdirSync(packageDir);
  }

  fse.copySync(commonSrc, packageSrc, { overwrite: true });
} catch (err) {
  console.error(err);
}
