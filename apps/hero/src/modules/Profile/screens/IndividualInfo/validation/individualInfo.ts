import * as yup from 'yup';

import { emailValidationSchema, ValidationHints } from '@hero24/common';

import { SOCIAL_ID_LENGTH } from './constants';

import { DISPLAYED_NAME_PLACEHOLDER } from '$modules/Profile/components/IndividualInfoForm/constants';

export const individualInfoSchema = yup.object({
  email: emailValidationSchema.required(ValidationHints.REQUIRED),
  name: yup.string().required(ValidationHints.REQUIRED),
  displayedName: yup
    .string()
    .test(
      'is-field-changed',
      'Field not changed',
      (value) => value !== DISPLAYED_NAME_PLACEHOLDER,
    )
    .required(),
  lastName: yup.string().required(ValidationHints.REQUIRED),
  socialId: yup
    .string()
    .length(SOCIAL_ID_LENGTH, ValidationHints.INVALID_SOCIAL_ID)
    .required(ValidationHints.REQUIRED),
  birthday: yup.date().required(ValidationHints.INVALID_DATE),
});
