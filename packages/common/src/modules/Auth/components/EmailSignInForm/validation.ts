import * as yup from 'yup';

import {
  emailValidationSchema,
  ErrorHints,
  passwordValidationSchema,
} from '$common';

export const validationSchema = yup.object({
  email: emailValidationSchema.required(ErrorHints.REQUIRED),
  password: passwordValidationSchema.required(ErrorHints.REQUIRED),
});
