import {
  CountryCode,
  CountryCodeList,
} from 'react-native-country-picker-modal';
import * as yup from 'yup';

import { multiSelectArraySchema } from '@hero24/common';

import { defaultLanguages } from './constants';

const countryCodeMultiSelectArraySchema = multiSelectArraySchema<CountryCode>(
  false,
).of(yup.mixed<CountryCode>().oneOf(CountryCodeList).required());

export const bioSchema = yup.object({
  info: yup.string().notRequired(),
  languages: countryCodeMultiSelectArraySchema
    .default(defaultLanguages)
    .notRequired(),
});
