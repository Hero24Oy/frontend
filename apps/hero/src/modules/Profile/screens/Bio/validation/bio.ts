import {
  CountryCode,
  CountryCodeList,
} from 'react-native-country-picker-modal';
import * as yup from 'yup';

import { DEFAULT_LANGUAGES, multiSelectArraySchema } from '@hero24/common';

const countryCodeMultiSelectArraySchema = multiSelectArraySchema<CountryCode>(
  false,
).of(yup.mixed<CountryCode>().oneOf(CountryCodeList).required());

export const bioSchema = yup.object({
  info: yup.string().notRequired(),
  languages: countryCodeMultiSelectArraySchema
    .default(DEFAULT_LANGUAGES)
    .notRequired(),
});
