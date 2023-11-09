import { parsePhoneNumber } from 'libphonenumber-js';
import * as yup from 'yup';

import { PhoneSignInFormData } from './types';

import { ValidationHints } from '$common';

export const validationSchema: yup.ObjectSchema<PhoneSignInFormData> = yup
  .object()
  .shape({
    code: yup.string(),
    phone: yup
      .string()
      .required(ValidationHints.REQUIRED)
      .test(
        'is-valid-phone',
        ValidationHints.INVALID_PHONE,
        function validate(phone: string) {
          try {
            const { code } = this.parent as PhoneSignInFormData;

            const phoneNumber = parsePhoneNumber(
              code ? code.concat(phone) : phone,
            );

            return phoneNumber?.isValid();
          } catch {
            return false;
          }
        },
      ),
  });
