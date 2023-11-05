import {
  Input as GluestackInput,
  InputSlot,
  VStack,
} from '@gluestack-ui/themed';
import { ReactElement, useCallback, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import {
  InputField,
  InputHelper,
  InputTitle,
  PasswordVisibleSwitcher,
} from './components';
import { InputProps, InputType } from './types';

import { Size } from '$theme';

export const Input = <Type extends FieldValues>(
  props: InputProps<Type>,
): ReactElement => {
  const {
    control,
    name,
    placeholder,
    mask,
    leftSlot,
    rightSlot,
    title,
    isHelperDisabled,
    size = Size.SM,
    type = InputType.TEXT,
    isDisabled = false,
    keyboardType = 'default',
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const isPassword = type === InputType.PASSWORD;

  const toggleIsPasswordVisible = useCallback((): void => {
    setIsPasswordVisible((prev) => !prev);
  }, [setIsPasswordVisible, type]);

  return (
    <VStack style={styles.mainWrapper}>
      <InputTitle value={title} size={size} />
      <GluestackInput
        isDisabled={isDisabled}
        size={size}
        isInvalid={Boolean(error)}
      >
        {leftSlot ? <InputSlot>{leftSlot}</InputSlot> : null}

        <InputField
          field={field}
          keyboardType={keyboardType}
          mask={mask}
          placeholder={placeholder}
          type={isPasswordVisible ? InputType.TEXT : type}
        />

        {rightSlot ? <InputSlot>{rightSlot}</InputSlot> : null}

        {isPassword ? (
          <PasswordVisibleSwitcher
            isPasswordVisible={isPasswordVisible}
            toggleIsPasswordVisible={toggleIsPasswordVisible}
          />
        ) : null}
      </GluestackInput>
      {!isHelperDisabled ? <InputHelper error={error} /> : null}
    </VStack>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    gap: 4,
  },
});

export * from './types';
