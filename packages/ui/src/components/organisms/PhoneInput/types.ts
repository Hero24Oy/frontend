import { InputProps } from 'components/molecules';
import { FieldValues, Path } from 'react-hook-form';
import { CountryCode } from 'react-native-country-picker-modal';

type InputPropsFieldsForPick = 'control' | 'placeholder' | 'isDisabled';

export interface PhoneInputProps<Type extends FieldValues>
  extends Pick<InputProps<Type>, InputPropsFieldsForPick> {
  codeFieldName: Path<Type>;
  initialCountryCode: CountryCode;
  phoneFieldName: Path<Type>;
  preferredCountryCodes?: CountryCode[];
}
