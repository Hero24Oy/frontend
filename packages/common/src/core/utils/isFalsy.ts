import isDate from 'lodash/isDate';
import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';

export const isFalsy = (value: unknown): boolean => {
  // we need this because if value has type Date(NaN)
  // isObject returns true and isEmpty returns true, but the value is falsy
  if (isDate(value)) {
    return false;
  }

  if (isObject(value)) {
    return isEmpty(value);
  }

  return !value;
};
