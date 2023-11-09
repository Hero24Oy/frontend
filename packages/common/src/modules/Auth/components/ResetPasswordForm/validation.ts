import * as yup from 'yup';

import { ResetPasswordFormData } from './types';

import { emailValidationSchema, ValidationHints } from '$common';

export const validationSchema: yup.ObjectSchema<ResetPasswordFormData> = yup
  .object()
  .shape({
    email: emailValidationSchema.required(ValidationHints.REQUIRED),
  });
