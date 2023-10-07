import {
  Input as InputOrigin,
  InputField as InputFieldOrigin,
} from '@gluestack-ui/themed';
import { FC } from 'react';
import { OnChange, OnChangeText } from 'types';

import { InputType } from '../../constants';

interface InputProps {
  disabled?: boolean;
  onChange?: OnChange;
  onChangeText?: OnChangeText;
  placeholder?: string;
  type?: InputType;
}

export const Input: FC<InputProps> = (props) => {
  const {
    placeholder,
    type = InputType.TEXT,
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
