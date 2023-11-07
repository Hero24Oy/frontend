import * as yup from 'yup';

import { ErrorHints } from '../constants';

export const passwordSignInValidationSchema: yup.ISchema<string> = yup
  .string()
  .required(ErrorHints.REQUIRED);
