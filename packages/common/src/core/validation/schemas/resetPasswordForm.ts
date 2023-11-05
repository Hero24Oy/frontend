import * as yup from 'yup';

import { emailValidationShape } from './email';

export const resetPasswordFormValidationSchema = yup.object().shape({
  email: emailValidationShape,
});
