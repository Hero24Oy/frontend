import {
  Input as InputOrigin,
  InputField as InputFieldOrigin,
} from '@gluestack-ui/themed';
import React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

import { InputType } from '../../types/InputType';

export interface InputProps {
  disabled?: boolean;
  onChange?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  placeholder?: string;
  type?: InputType;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    placeholder,
    type = 'text',
    disabled = false,
    onChange,
    onChangeText,
  } = props;

  return (
    <InputOrigin isDisabled={disabled}>
      <InputFieldOrigin
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onChangeText={onChangeText}
      />
    </InputOrigin>
  );
};
