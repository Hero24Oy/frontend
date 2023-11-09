import * as yup from 'yup';

import { codeValidationSchema, ValidationHints } from '$common';

export const validationSchema = (codeLength: number) =>
  yup.object().shape({
    code: codeValidationSchema(codeLength).required(ValidationHints.REQUIRED),
  });
