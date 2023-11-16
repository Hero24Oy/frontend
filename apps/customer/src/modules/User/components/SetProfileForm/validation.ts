import { boolean, InferType, object, string } from 'yup';

import { emailValidationSchema, ValidationHints } from '@hero24/common';

export const validationSchema = object({
  email: emailValidationSchema.required(ValidationHints.INVALID_EMAIL),
  firstName: string().required(ValidationHints.REQUIRED),
  lastName: string().required(ValidationHints.REQUIRED),
  isBusinessCustomer: boolean().optional().default(false),
  businessName: boolean()
    .nullable()
    .when('isBusinessCustomer', ([isBusinessCustomer]: boolean[]) => {
      if (isBusinessCustomer) {
        return string().required(ValidationHints.REQUIRED);
      }

      return string().optional();
    }),
  businessId: boolean()
    .nullable()
    .when('isBusinessCustomer', ([isBusinessCustomer]: boolean[]) => {
      if (isBusinessCustomer) {
        return string().required(ValidationHints.REQUIRED);
      }

      return string().optional();
    }),
});

export type SetProfileFormData = InferType<typeof validationSchema>;
