import { CountryCode } from 'react-native-country-picker-modal';

import { PhoneSignInFormData } from './types';

export const initialFormState: PhoneSignInFormData = {
  code: '',
  phone: '',
};

export const PHONE_INITIAL_COUNTRY_CODE: CountryCode = 'FI';

export const PREFERRED_COUNTRIES: CountryCode[] = ['FI'];
