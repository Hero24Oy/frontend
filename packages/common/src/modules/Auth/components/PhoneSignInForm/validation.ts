import { parsePhoneNumber } from 'libphonenumber-js';
import * as yup from 'yup';

import { PhoneSignInFormData } from './types';

import { ErrorHints } from '$common';

export const validationSchema: yup.ObjectSchema<PhoneSignInFormData> = yup
  .object()
  .shape({
    code: yup.string(),
    phone: yup
      .string()
      .required(ErrorHints.REQUIRED)
      .test(
        'is-valid-phone',
        ErrorHints.INVALID_PHONE,
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
