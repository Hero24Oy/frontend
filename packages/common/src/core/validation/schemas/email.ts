import * as yup from 'yup';

import { ErrorHints } from '../constants';

import { Maybe } from '$common';

export const emailValidationSchema: yup.StringSchema<Maybe<string>> = yup
  .string()
  .email(ErrorHints.INVALID_EMAIL);
