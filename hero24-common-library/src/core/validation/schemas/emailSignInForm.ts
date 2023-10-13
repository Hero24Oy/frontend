import * as yup from 'yup';

import { emailValidationShape } from './email';
import { passwordValidationShape } from './password';

export const emailSignInFormValidationSchema = yup.object().shape({
  email: emailValidationShape,
  password: passwordValidationShape,
});
