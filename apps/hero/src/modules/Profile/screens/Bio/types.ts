import { CountryCode } from 'react-native-country-picker-modal';

import { Maybe } from '@hero24/common';

export type Bio = {
  languages: CountryCode[] | null;
  info?: Maybe<string>;
};
