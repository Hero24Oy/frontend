import * as yup from 'yup';

import {
  emailValidationSchema,
  rangeSchema,
  ValidationHints,
} from '@hero24/common';

export const professionalInfoSchema = yup.object({
  email: emailValidationSchema.required(ValidationHints.REQUIRED),
  employees: rangeSchema.required(ValidationHints.REQUIRED),
  name: yup.string().required(ValidationHints.REQUIRED),
});
