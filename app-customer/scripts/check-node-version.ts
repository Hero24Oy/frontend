import { exec } from 'child_process';
import semver from 'semver';

import { engines } from '../package.json';

const { node: expectedNodeVersion, npm: expectedNpmVersion } = engines;
const actualNodeVersion = process.version;

exec('npm -v', (_error, stdout) => {
  const actualNpmVersion = stdout;

  if (!semver.satisfies(actualNpmVersion, expectedNpmVersion)) {
    throw new Error(
      `The current npm version ${actualNpmVersion} does not satisfy the required version ${expectedNpmVersion} .`,
    );
  }
});

if (!semver.satisfies(actualNodeVersion, expectedNodeVersion)) {
  throw new Error(
    `The current node version ${actualNodeVersion} does not satisfy the required version ${expectedNodeVersion} .`,
  );
}
