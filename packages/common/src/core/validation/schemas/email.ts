import * as yup from 'yup';

import { Maybe, ValidationHints } from '$core';

export const emailValidationSchema: yup.StringSchema<Maybe<string>> = yup
  .string()
  .email(ValidationHints.INVALID_EMAIL);
