import logoPath from './logo-red.png';

// eslint-disable-next-line @cspell/spellchecker -- remove with comment
// TSUP handle copy images into dist with prefixes
// for using it in components we need to include paths to them into code on build stage
export const logo: string = require(logoPath);
