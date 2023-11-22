import * as yup from 'yup';

import { Country, DEFAULT_COUNTRY, ValidationHints } from '@hero24/common';

import { postcodeMapper } from '$modules/Profile/components';
import { Postcode } from '$modules/Profile/components/AddressForm/hooks/usePostcode/types';

export const addressSchema = yup.object({
  address: yup.string().required(ValidationHints.REQUIRED),
  city: yup.string().required(ValidationHints.REQUIRED),
  country: yup
    .string()
    .oneOf(Object.values(Country), ValidationHints.INVALID_COUNTRY)
    .default(DEFAULT_COUNTRY)
    .required(ValidationHints.REQUIRED),
  postcode: yup
    .string()
    .when('country', ([country]: Country[], schema) => {
      const postcode = postcodeMapper.get(country);
      const defaultPostcode = postcodeMapper.get(DEFAULT_COUNTRY) as Postcode;

      const maxLength = postcode?.maxLength ?? defaultPostcode.maxLength;
      const regex = postcode?.regex ?? defaultPostcode.regex;

      return schema
        .length(maxLength, ValidationHints.INVALID_POSTCODE)
        .matches(regex, ValidationHints.INVALID_POSTCODE);
    })
    .required(ValidationHints.REQUIRED),
});
