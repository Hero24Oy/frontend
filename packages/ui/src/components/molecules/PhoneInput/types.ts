import { FieldValues, Path } from 'react-hook-form';
import { CountryCode } from 'react-native-country-picker-modal';

import { InputProps } from '../Input';

type InputPropsOmit =
  | 'leftSlot'
  | 'rightSlot'
  | 'mask'
  | 'type'
  | 'keyboardType';

export interface PhoneInputProps<Type extends FieldValues>
  extends Omit<InputProps<Type>, InputPropsOmit> {
  callingCodeName: Path<Type>;
  initialCountryCode: CountryCode;
  preferredCountryCodes?: CountryCode[];
}
