import { parsePhoneNumber } from 'libphonenumber-js';
import * as yup from 'yup';

interface PhoneSignInFormFields {
  phone: string;
  code?: string;
}

export const phoneSignInFormValidationSchema = yup.object().shape({
  code: yup.string(),
  phone: yup
    .string()
    .required('Required')
    .test(
      'is-valid-phone',
      'Invalid phone number',
      function validate(phone: string) {
        try {
          const { code } = this.parent as PhoneSignInFormFields;

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
