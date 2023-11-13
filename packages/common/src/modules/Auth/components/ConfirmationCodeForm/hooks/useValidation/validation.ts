import * as yup from 'yup';

import { codeValidationSchema, ValidationHints } from '$core';
import { CODE_LENGTH } from '$modules/Auth/components/ConfirmationCodeForm/constants';

export type ConfirmationCodeFormData = {
  code: string;
};

export const initialFormState: ConfirmationCodeFormData = {
  code: '',
};

export const validationSchema = yup.object({
  code: codeValidationSchema(CODE_LENGTH).required(ValidationHints.REQUIRED),
});
