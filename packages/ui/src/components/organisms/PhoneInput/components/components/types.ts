import { Country } from 'react-native-country-picker-modal';
import { Maybe } from 'types';

export type CallingCodeProps = {
  onSelect: (callingCode: string) => void;
  value: string;
  country?: Maybe<Country>;
};
