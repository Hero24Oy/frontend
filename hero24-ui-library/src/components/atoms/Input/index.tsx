import {
  Input as GluestackInput,
  InputField as GluestackInputField,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { StyleSheet } from 'react-native';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

interface InputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  type?: `${InputType}`;
}

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
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
      <Text style={styles.errorText}>{errors[name]?.message?.toString() || ''}</Text>
    </VStack>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
    paddingLeft: 12
  },
});
