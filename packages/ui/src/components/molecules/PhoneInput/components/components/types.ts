import { Country } from 'react-native-country-picker-modal';

export interface CallingCodeProps {
  onCodeChange: (callingCode: string) => void;
  value: string;
  country?: Country | null;
}
