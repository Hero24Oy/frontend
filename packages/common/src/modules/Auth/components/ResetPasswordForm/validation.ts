import * as yup from 'yup';

import { emailValidationSchema, ValidationHints } from '$core';

export const validationSchema = yup.object({
  email: emailValidationSchema.required(ValidationHints.REQUIRED),
});
