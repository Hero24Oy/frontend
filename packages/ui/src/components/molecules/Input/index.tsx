import {
  Input as GluestackInput,
  InputSlot,
  VStack,
} from '@gluestack-ui/themed';
import { ReactElement, useCallback, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { KeyboardType, StyleSheet } from 'react-native';

import {
  Helper,
  InputField,
  PasswordVisibleSwitcher,
  Title,
} from './components';
import { InputSize, InputType } from './types';

export type InputProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  isDisabled?: boolean;
  keyboardType?: KeyboardType;
  leftSlot?: JSX.Element;
  mask?: string;
  placeholder?: string;
  rightSlot?: JSX.Element;
  size?: `${InputSize}`;
  title?: string;
  type?: `${InputType}`;
};

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
    size = InputSize.SMALL,
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
      <Title value={title} inputSize={size} />
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
      <Helper error={error} />
    </VStack>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    gap: 6,
  },
});
