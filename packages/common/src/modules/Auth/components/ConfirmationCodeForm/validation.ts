import * as yup from 'yup';

import { CODE_LENGTH } from './constants';

import { codeValidationSchema, ValidationHints } from '$common';

export const validationSchema = yup.object().shape({
  code: codeValidationSchema(CODE_LENGTH).required(ValidationHints.REQUIRED),
});
