import * as yup from 'yup';

import { CODE_LENGTH } from '$configs';
import { codeValidationSchema, ValidationHints } from '$core';

export type ConfirmationCodeFormData = {
  code: string;
};

export const initialFormState: ConfirmationCodeFormData = {
  code: '',
};

export const validationSchema = yup.object({
  code: codeValidationSchema(CODE_LENGTH).required(ValidationHints.REQUIRED),
});
