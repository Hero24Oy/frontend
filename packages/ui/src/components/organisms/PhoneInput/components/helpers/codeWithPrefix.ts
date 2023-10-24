const CALLING_CODE_PREFIX = '+';

export const codeWithPrefix = (code: string | undefined): string =>
  code ? CALLING_CODE_PREFIX.concat(code) : '';
