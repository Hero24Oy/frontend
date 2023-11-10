import isString from 'lodash/isString';

import { RadioOption } from '../types';

export const stringifyRadioValue = (value: RadioOption['value']): string => {
  if (isString(value)) {
    return value;
  }

  return String(value);
};
