import {
  Input as GluestackInput,
  InputSlot,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React, { ReactElement, useMemo } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { KeyboardType } from 'react-native';

import { InputField } from './components/InputField';
import { InputType } from './constants';

export interface InputProps<Type extends FieldValues> {
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

  const errorText = useMemo(() => {
    return errors[name]?.message?.toString() || '';
  }, [errors]);

  return (
    <VStack>
      <GluestackInput isDisabled={isDisabled}>
        {leftSlot ? <InputSlot>{leftSlot}</InputSlot> : null}
        <InputField
          field={field}
          keyboardType={keyboardType}
          mask={mask}
          placeholder={placeholder}
          type={type}
        />
        {rightSlot ? <InputSlot>{rightSlot}</InputSlot> : null}
      </GluestackInput>
      <Text>{errorText}</Text>
    </VStack>
  );
};
