import * as yup from 'yup';

import { emailSchema, rangeSchema, ValidationHints } from '@hero24/common';

export const companyInfoSchema = yup.object({
  email: emailSchema.required(ValidationHints.REQUIRED),
  employees: rangeSchema.required(ValidationHints.REQUIRED),
  name: yup.string().required(ValidationHints.REQUIRED),
});
