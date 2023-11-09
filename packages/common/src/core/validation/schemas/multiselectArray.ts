import * as yup from 'yup';

import { ValidationHints } from '../enums';

export const multiSelectArraySchema = <Type>(
  optional = true,
): yup.ArraySchema<Type[] | undefined, yup.AnyObject, undefined, ''> => {
  if (optional) {
    return yup.array();
  }

  return yup.array().min(1, ValidationHints.MORE_THAN_ZERO);
};
