// We need delete this script after publish in npm

import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';

const uiLibraryDir = path.join(__dirname, '../../ui-library');
const packageDir = path.join(__dirname, '../node_modules/ui-library');

const uiLibrarySrc = path.join(uiLibraryDir, 'src');
const packageSrc = path.join(packageDir, 'src');

const uiLibraryIndex = path.join(uiLibraryDir, 'index.ts');
const packageIndex = path.join(packageDir, 'index.ts');

try {
  if (!fs.existsSync(packageDir)) {
    fs.mkdirSync(packageDir);
  }

  fse.copySync(uiLibrarySrc, packageSrc, { overwrite: true });
  fse.copySync(uiLibraryIndex, packageIndex, { overwrite: true });
} catch (err) {
  console.error(err);
}
