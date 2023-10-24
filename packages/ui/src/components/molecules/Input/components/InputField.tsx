import { InputField as GluestackInputField } from '@gluestack-ui/themed';
import React, { ReactElement } from 'react';
import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import { KeyboardType } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { InputType } from '../constants';

import { InputFieldProps } from './types';

export interface Props<Type extends FieldValues> {
  field: ControllerRenderProps<Type, Path<Type>>;
  keyboardType?: KeyboardType;
  mask?: string;
  placeholder?: string;
  type?: `${InputType}`;
}

export const InputField = <Type extends FieldValues>(
  props: Props<Type>,
): ReactElement => {
  const {
    placeholder,
    type = InputType.TEXT,
    keyboardType = 'default',
    mask,
    field,
  } = props;

  const { onChange, value, ref } = field;

  const isMasked = Boolean(mask);
  const isPassword = type === InputType.PASSWORD;

  const inputProps: InputFieldProps = {
    ref,
    placeholder,
    type,
    secureTextEntry: isPassword,
    keyboardType,
  };

  if (isMasked) {
    return (
      <TextInputMask
        customTextInput={GluestackInputField}
        customTextInputProps={{ ...inputProps }}
        type="custom"
        options={{ mask }}
        onChangeText={onChange}
        value={value}
      />
    );
  }

  return (
    <GluestackInputField
      {...inputProps}
      value={value}
      onChangeText={onChange}
    />
  );
};
