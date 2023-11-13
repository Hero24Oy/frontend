import { Control, FieldValues, Path } from 'react-hook-form';
import { CountryCode } from 'react-native-country-picker-modal';

export type PhoneInputProps<Type extends FieldValues> = {
  codeFieldName: Path<Type>;
  control: Control<Type>;
  initialCountryCode: CountryCode;
  phoneFieldName: Path<Type>;
  isDisabled?: boolean;
  placeholder?: string;
  preferredCountryCodes?: CountryCode[];
  title?: string;
};
