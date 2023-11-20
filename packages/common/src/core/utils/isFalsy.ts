import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';

export const isFalsy = (value: unknown): boolean => {
  if (isObject(value)) {
    return isEmpty(value);
  }

  return !value;
};
