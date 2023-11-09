import * as yup from 'yup';

import { postcodeValidationSchema, stringSchema } from '@hero24/common';

import { CompanyCreation } from '$modules/Profile/stores';

export const companyAddressSchema = yup
  .object<CompanyCreation['companyAddress']>()
  .shape({
    address: stringSchema.required(),
    city: stringSchema.required(),
    country: stringSchema.required(),
    postcode: postcodeValidationSchema.call(this),
  });
