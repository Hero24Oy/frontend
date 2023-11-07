import * as yup from 'yup';

import { ErrorHints } from '../constants';

export const emailValidationShape: yup.ISchema<string> = yup
  .string()
  .required(ErrorHints.REQUIRED)
  .email(ErrorHints.INVALID_EMAIL);
