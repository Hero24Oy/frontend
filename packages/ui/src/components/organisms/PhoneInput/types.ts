import { FieldValues, Path } from 'react-hook-form';
import { CountryCode } from 'react-native-country-picker-modal';

import { InputProps } from '$molecules/Input/types';

type InputPropsFieldsForPick = 'control' | 'placeholder';

export type PhoneInputProps<Type extends FieldValues> = Pick<
  InputProps<Type>,
  InputPropsFieldsForPick
> & {
  codeFieldName: Path<Type>;
  initialCountryCode: CountryCode;
  phoneFieldName: Path<Type>;
  isDisabled?: boolean;
  preferredCountryCodes?: CountryCode[];
};
