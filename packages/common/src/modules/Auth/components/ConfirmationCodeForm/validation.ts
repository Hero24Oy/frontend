import * as yup from 'yup';

import { codeValidationSchema, ErrorHints } from '$common';

export const validationSchema = (codeLength: number) =>
  yup.object().shape({
    code: codeValidationSchema(codeLength).required(ErrorHints.REQUIRED),
  });
