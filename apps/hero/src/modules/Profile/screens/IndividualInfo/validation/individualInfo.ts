import * as yup from 'yup';

import { emailValidationSchema, ValidationHints } from '@hero24/common';

import { SOCIAL_ID_LENGTH } from './constants';

import { DISPLAYED_NAME_PLACEHOLDER } from '$modules/Profile/components/IndividualInfoForm/constants';

export const individualInfoSchema = yup.object({
  email: emailValidationSchema.required(ValidationHints.REQUIRED),
  firstName: yup.string().required(ValidationHints.REQUIRED),
  lastName: yup.string().required(ValidationHints.REQUIRED),
  name: yup
    .string()
    .test(
      'is-field-changed',
      ValidationHints.FIELD_NOT_CHANGED,
      (value) => value !== DISPLAYED_NAME_PLACEHOLDER,
    )
    .required(),
  socialId: yup
    .string()
    .length(SOCIAL_ID_LENGTH, ValidationHints.INVALID_SOCIAL_ID)
    .required(ValidationHints.REQUIRED),
  birthday: yup.date().required(ValidationHints.INVALID_DATE),
});
