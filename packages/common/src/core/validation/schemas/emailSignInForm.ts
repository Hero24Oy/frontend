import * as yup from 'yup';

import { ValidationHints } from '../enums';

import { emailSchema } from './email';
import { passwordSignInValidationSchema } from './password';

export const emailSignInFormValidationSchema = yup.object().shape({
  email: emailSchema.required(ValidationHints.REQUIRED),
  password: passwordSignInValidationSchema,
});
