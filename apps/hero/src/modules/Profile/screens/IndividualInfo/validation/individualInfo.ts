import * as yup from 'yup';

import { emailValidationSchema, ValidationHints } from '@hero24/common';

import { SOCIAL_ID_LENGTH } from './constants';

export const individualInfoSchema = yup.object({
  email: emailValidationSchema.required(ValidationHints.REQUIRED),
  name: yup.string().required(ValidationHints.REQUIRED),
  displayedName: yup.string().required(ValidationHints.REQUIRED),
  lastName: yup.string().required(ValidationHints.REQUIRED),
  socialId: yup
    .string()
    .length(SOCIAL_ID_LENGTH, ValidationHints.INVALID_SOCIAL_ID)
    .required(ValidationHints.REQUIRED),
  birthday: yup.date().required(ValidationHints.INVALID_DATE),
});
