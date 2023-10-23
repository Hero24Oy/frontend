import {
  Input as GluestackInput,
  InputField as GluestackInputField,
  InputSlot,
} from '@gluestack-ui/themed';
import { Text, VStack } from 'components/atoms';
import React, { ReactElement, Ref } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { KeyboardType, TextInputProps } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { InputType } from './constants';

interface InputFieldProps {
  keyboardType?: KeyboardType;
  placeholder?: string;
  ref?: Ref<TextInputProps> | undefined;
  secureTextEntry?: boolean;
  type?: `${InputType}`;
}

export interface InputProps<Type extends FieldValues>
  extends Omit<InputFieldProps, 'secureTextEntry' | 'ref'> {
  control: Control<Type>;
  name: Path<Type>;
  isDisabled?: boolean;
  keyboardType?: KeyboardType;
  leftSlot?: JSX.Element;
  mask?: string;
  placeholder?: string;
  rightSlot?: JSX.Element;
  type?: `${InputType}`;
}

/**
 * Description
 * @param {InputProps<Type>['control']} props.control
 * control from useForm hook
 * @param {InputProps<Type>['name']} props.name
 * Name of useForm field associated with current input
 * @param {InputProps<Type>['leftSlot']} props.leftSlot
 * @param {InputProps<Type>['rightSlot']} props.rightSlot
 * leftSlot / rightSlot - you can pass any components for render inside Input at the left / right side
 * @example
 * <Input ...other_props leftSlot={{<Button>Press!</Button>}} />
 * @returns {ReactElement}
 */

export const Input = <Type extends FieldValues>(
  props: InputProps<Type>,
): ReactElement => {
  const {
    control,
    name,
    isDisabled = false,
    placeholder,
    type = InputType.TEXT,
    mask,
    keyboardType = 'default',
    leftSlot,
    rightSlot,
  } = props;

  const {
    field,
    formState: { errors },
  } = useController({ name, control });

  const isMasked = Boolean(mask);
  const isPassword = type === InputType.PASSWORD;
  const { onChange, value, ref } = field;

  const inputProps: InputFieldProps = {
    ref,
    placeholder,
    type,
    secureTextEntry: isPassword,
    keyboardType,
  };

  return (
    <VStack>
      <GluestackInput isDisabled={isDisabled}>
        {leftSlot ? <InputSlot>{leftSlot}</InputSlot> : null}
        {isMasked ? (
          <TextInputMask
            customTextInput={GluestackInputField}
            customTextInputProps={{ ...inputProps }}
            type="custom"
            options={{ mask }}
            onChangeText={onChange}
            value={value}
          />
        ) : (
          <GluestackInputField
            {...inputProps}
            value={value}
            onChangeText={onChange}
          />
        )}
        {rightSlot ? <InputSlot>{rightSlot}</InputSlot> : null}
      </GluestackInput>
      <Text>{errors[name]?.message?.toString() || ''}</Text>
    </VStack>
  );
};
