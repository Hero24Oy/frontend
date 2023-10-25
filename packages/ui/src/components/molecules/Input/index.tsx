import {
  Input as GluestackInput,
  InputSlot,
  VStack,
} from '@gluestack-ui/themed';
import React, { ReactElement, useMemo } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { KeyboardType } from 'react-native';

import { InputField } from './components/InputField';
import { InputType } from './constants';

import { Text } from '$atoms';

export type InputProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  isDisabled?: boolean;
  keyboardType?: KeyboardType;
  leftSlot?: JSX.Element;
  mask?: string;
  placeholder?: string;
  rightSlot?: JSX.Element;
  type?: `${InputType}`;
};

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
