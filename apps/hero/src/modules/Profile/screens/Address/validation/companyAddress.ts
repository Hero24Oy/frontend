import * as yup from 'yup';

import { Country, DEFAULT_COUNTRY, ValidationHints } from '@hero24/common';

import { Postcodes } from '$modules/Profile/components';
import { ProfileCreation } from '$modules/Profile/stores';

type CompanyAddressSchema = (
  country: Country,
) => yup.ObjectSchema<ProfileCreation['address']>;

export const companyAddressSchema: CompanyAddressSchema = (country) => {
  const { maxLength, regex } = Postcodes[country];

  return yup.object({
    address: yup.string().required(ValidationHints.REQUIRED),
    city: yup.string().required(ValidationHints.REQUIRED),
    country: yup
      .string()
      .default(DEFAULT_COUNTRY)
      .required(ValidationHints.REQUIRED),
    postcode: yup
      .string()
      .length(maxLength, ValidationHints.INVALID_POSTCODE)
      .matches(regex, ValidationHints.INVALID_POSTCODE)
      .required(ValidationHints.REQUIRED),
  });
};
