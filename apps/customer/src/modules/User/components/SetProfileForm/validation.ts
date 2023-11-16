import { boolean, InferType, object, string } from 'yup';

import { emailValidationSchema, ValidationHints } from '@hero24/common';

export const validationSchema = object({
  email: emailValidationSchema.required(ValidationHints.REQUIRED),
  firstName: string().required(),
  lastName: string().required(),
  isBusinessCustomer: boolean().optional().default(false),
  businessName: boolean()
    .nullable()
    .when('isBusinessCustomer', ([isBusinessCustomer]: boolean[]) => {
      if (isBusinessCustomer) {
        return string().required();
      }

      return string().optional();
    }),
  businessId: boolean()
    .nullable()
    .when('isBusinessCustomer', ([isBusinessCustomer]: boolean[]) => {
      if (isBusinessCustomer) {
        return string().required();
      }

      return string().optional();
    }),
});

export type SetProfileFormData = InferType<typeof validationSchema>;
