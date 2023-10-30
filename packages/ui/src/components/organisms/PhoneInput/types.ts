import { FieldValues, Path } from 'react-hook-form';
import { CountryCode } from 'react-native-country-picker-modal';

import { InputProps } from '$molecules';

type InputPropsFieldsForPick = 'control' | 'placeholder' | 'isDisabled';

export type PhoneInputProps<Type extends FieldValues> = Pick<
  InputProps<Type>,
  InputPropsFieldsForPick
> & {
  codeFieldName: Path<Type>;
  initialCountryCode: CountryCode;
  phoneFieldName: Path<Type>;
  preferredCountryCodes?: CountryCode[];
};
