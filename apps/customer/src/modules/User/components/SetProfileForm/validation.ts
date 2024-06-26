import { boolean, InferType, object, string } from 'yup';

import { emailValidationSchema, ValidationHints } from '@hero24/common';

export const validationSchema = object({
  email: emailValidationSchema.required(ValidationHints.INVALID_EMAIL),
  firstName: string().required(ValidationHints.REQUIRED),
  lastName: string().required(ValidationHints.REQUIRED),
  isBusinessCustomer: boolean().optional().default(false),
  businessName: string()
    .nullable()
    .when('isBusinessCustomer', ([isBusinessCustomer], schema) =>
      isBusinessCustomer
        ? schema.required(ValidationHints.REQUIRED)
        : schema.optional(),
    ),
  businessId: string()
    .nullable()
    .when('isBusinessCustomer', ([isBusinessCustomer], schema) =>
      isBusinessCustomer
        ? schema.required(ValidationHints.REQUIRED)
        : schema.optional(),
    ),
});

export type SetProfileFormData = InferType<typeof validationSchema>;
