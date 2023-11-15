import * as yup from 'yup';

import { Countries, ValidationHints } from '@hero24/common';

import { Postcodes } from '../constants';

import { CompanyCreation } from '$modules/Profile/stores';

type CompanyAddressSchema = (
  country: keyof typeof Countries,
) => yup.ObjectSchema<CompanyCreation['companyAddress']>;

export const companyAddressSchema: CompanyAddressSchema = (country) => {
  const { maxLength, regex } = Postcodes[country];

  return yup.object({
    address: yup.string().required(ValidationHints.REQUIRED),
    city: yup.string().required(ValidationHints.REQUIRED),
    country: yup.string().required(ValidationHints.REQUIRED),
    postcode: yup
      .string()
      .length(maxLength)
      .matches(regex, ValidationHints.INVALID_POSTCODE)
      .required(ValidationHints.REQUIRED),
  });
};
