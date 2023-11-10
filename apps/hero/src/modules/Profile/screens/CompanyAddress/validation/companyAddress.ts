import * as yup from 'yup';

import { ValidationHints } from '@hero24/common';

import { DEFAULT_POSTCODE_LENGTH, POSTCODE_REGEX } from '$configs';

export const companyAddressSchema = yup.object({
  address: yup.string().required(ValidationHints.REQUIRED),
  city: yup.string().required(ValidationHints.REQUIRED),
  country: yup.string().required(ValidationHints.REQUIRED),
  postcode: yup
    .string()
    .required(ValidationHints.REQUIRED)
    .length(DEFAULT_POSTCODE_LENGTH)
    .matches(POSTCODE_REGEX, ValidationHints.INVALID_POSTCODE),
});
