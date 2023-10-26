import { InputField as GluestackInputField } from '@gluestack-ui/themed';
import React, { ReactElement } from 'react';
import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import { KeyboardType } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { InputFieldProps } from './types';

import { InputType } from '../constants';

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
    mask,
    field,
    type = InputType.TEXT,
    keyboardType = 'default',
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
        type="custom"
        customTextInput={GluestackInputField}
        customTextInputProps={inputProps}
        options={{ mask }}
        onChangeText={onChange}
        value={value}
      />
    );
  }

  return (
    <GluestackInputField
      value={value}
      onChangeText={onChange}
      {...inputProps}
    />
  );
};
