import { FieldValues, Path } from 'react-hook-form';
import { CountryCode } from 'react-native-country-picker-modal';

import { InputProps } from '../Input';

type InputPropsOmit =
  | 'leftSlot'
  | 'rightSlot'
  | 'mask'
  | 'type'
  | 'keyboardType'
  | 'name';

export interface PhoneInputProps<Type extends FieldValues>
  extends Omit<InputProps<Type>, InputPropsOmit> {
  codeFieldName: Path<Type>;
  initialCountryCode: CountryCode;
  phoneFieldName: Path<Type>;
  preferredCountryCodes?: CountryCode[];
}
