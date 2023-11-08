import * as yup from 'yup';

import {
  emailValidationSchema,
  ErrorHints,
  passwordSignInValidationSchema,
} from '$common';

export const emailSignInFormValidationSchema = yup.object({
  email: emailValidationSchema.required(ErrorHints.REQUIRED),
  password: passwordSignInValidationSchema.required(ErrorHints.REQUIRED),
});
