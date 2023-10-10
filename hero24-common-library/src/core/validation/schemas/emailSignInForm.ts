import * as yup from 'yup';

import { emailValidationShape, passwordValidationShape } from '../shapes';

export const emailSignInFormValidationSchema = yup.object().shape({
  email: emailValidationShape,
  password: passwordValidationShape,
});
