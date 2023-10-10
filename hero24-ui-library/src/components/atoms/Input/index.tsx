import {
  Input as GluestackInput,
  InputField as GluestackInputField,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { ReactElement, useMemo } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { InputType } from './constants';

interface Props<Type extends FieldValues> {
  control: Control<Type>;
  name: Path<Type>;
  disabled?: boolean;
  placeholder?: string;
  type?: `${InputType}`;
}

export const Input = <Type extends FieldValues>(
  props: Props<Type>,
): ReactElement => {
  const {
    control,
    name,
    disabled = false,
    placeholder,
    type = InputType.TEXT,
  } = props;

  const {
    field,
    formState: { errors },
  } = useController({ name, control, rules: { required: true } });

  const errorMessage = useMemo(
    (): string => errors[name]?.message?.toString() || '',
    [errors, name],
  );

  return (
    <VStack>
      <GluestackInput isDisabled={disabled}>
        <GluestackInputField
          placeholder={placeholder}
          type={type}
          onChangeText={field.onChange}
          value={field.value}
          ref={field.ref}
        />
      </GluestackInput>
      <Text>{errorMessage}</Text>
    </VStack>
  );
};
