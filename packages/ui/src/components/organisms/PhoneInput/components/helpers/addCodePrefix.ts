import { Maybe } from 'types';

const CALLING_CODE_PREFIX = '+';

export const addCodePrefix = (code: Maybe<string>): string =>
  code ? CALLING_CODE_PREFIX.concat(code) : '';
