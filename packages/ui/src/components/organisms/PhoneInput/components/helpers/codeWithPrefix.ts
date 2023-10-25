import { Maybe } from 'types';

const CALLING_CODE_PREFIX = '+';

export const codeWithPrefix = (code: Maybe<string>): string =>
  code ? CALLING_CODE_PREFIX.concat(code) : '';
