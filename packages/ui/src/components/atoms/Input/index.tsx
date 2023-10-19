import {
  Input as GluestackInput,
  InputField as GluestackInputField,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { ReactElement } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { InputType } from './constants';

interface Props<Type extends FieldValues> {
  control: Control<Type>;
  name: Path<Type>;
  isDisabled?: boolean;
  placeholder?: string;
  type?: `${InputType}`;
}

export const Input = <Type extends FieldValues>(
  props: Props<Type>,
): ReactElement => {
  const {
    control,
    name,
    isDisabled = false,
    placeholder,
    type = InputType.TEXT,
  } = props;

  const {
    field,
    formState: { errors },
  } = useController({ name, control });

  return (
    <VStack>
      <GluestackInput isDisabled={isDisabled}>
        <GluestackInputField
          placeholder={placeholder}
          type={type}
          onChangeText={field.onChange}
          value={field.value}
          ref={field.ref}
        />
      </GluestackInput>
      <Text>{errors[name]?.message?.toString() || ''}</Text>
    </VStack>
  );
};
