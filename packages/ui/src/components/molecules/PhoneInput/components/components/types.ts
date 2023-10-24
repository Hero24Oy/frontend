import { Country } from 'react-native-country-picker-modal';

export interface CallingCodeProps {
  onSelect: (callingCode: string) => void;
  value: string;
  country?: Country | null;
}
