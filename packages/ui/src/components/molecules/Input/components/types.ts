import { Ref } from 'react';
import { KeyboardType, TextInputProps } from 'react-native';

import { InputType } from '../types';

export interface InputFieldProps {
  keyboardType: KeyboardType;
  secureTextEntry: boolean;
  placeholder?: string;
  ref?: Ref<TextInputProps>;
  type?: `${InputType}`;
}
