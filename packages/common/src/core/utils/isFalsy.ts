import { isDate, isEmpty, isObject } from 'lodash';

export const isFalsy = (value: unknown): boolean => {
  if (isDate(value)) {
    return false;
  }

  if (isObject(value)) {
    return isEmpty(value);
  }

  return !value;
};
