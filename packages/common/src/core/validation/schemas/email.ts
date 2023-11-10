import * as yup from 'yup';

import { Maybe } from '$core/types';
import { ValidationHints } from '$core/validation/enums';

export const emailValidationSchema: yup.StringSchema<Maybe<string>> = yup
  .string()
  .email(ValidationHints.INVALID_EMAIL);
