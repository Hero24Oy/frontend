import * as yup from 'yup';

import { emailSchema, ValidationHints } from '@hero24/common';

import { CompanyCreation } from '$modules/Profile/stores';

export const companyInfoSchema = yup
  .object<CompanyCreation['companyInfo']>()
  .shape({
    email: emailSchema.required(ValidationHints.REQUIRED),
    employees: yup.number().required(ValidationHints.REQUIRED),
    name: yup.string().required(ValidationHints.REQUIRED),
  });
