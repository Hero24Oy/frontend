import parsePhoneNumber from 'libphonenumber-js';
import * as yup from 'yup';

interface PhoneSignInFormFields {
  phone: string;
  callingCode?: string;
}

export const phoneSignInFormValidationSchema = yup.object().shape({
  callingCode: yup.string(),
  phone: yup
    .string()
    .required('Required field')
    .test('is-valid-phone', 'Invalid phone number', function validate(phone) {
      const { callingCode } = this.parent as PhoneSignInFormFields;

      const phoneNumber = parsePhoneNumber(
        callingCode ? callingCode.concat(phone) : phone,
      );

      return phoneNumber?.isValid();
    }),
});
