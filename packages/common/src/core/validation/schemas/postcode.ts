import { postcodeValidator } from 'postcode-validator';
import * as yup from 'yup';

import { Maybe, ValidationHints } from '$common';

export function postcodeValidationSchema(this: Maybe<{ country: string }>) {
  const validator = (postcode: string) => {
    try {
      return this ? postcodeValidator(postcode, this.country) : false;
    } catch {
      return false;
    }
  };

  return yup
    .string()
    .required(ValidationHints.REQUIRED)
    .test('is-valid-postcode', ValidationHints.INVALID_POSTCODE, validator);
}
