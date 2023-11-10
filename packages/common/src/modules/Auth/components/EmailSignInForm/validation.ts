import * as yup from 'yup';

import {
  emailValidationSchema,
  passwordValidationSchema,
  ValidationHints,
} from '$core';

export const validationSchema = yup.object({
  email: emailValidationSchema.required(ValidationHints.REQUIRED),
  password: passwordValidationSchema.required(ValidationHints.REQUIRED),
});
