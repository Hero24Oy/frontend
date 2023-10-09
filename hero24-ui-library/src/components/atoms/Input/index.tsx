import {
  Input as GluestackInput,
  InputField as GluestackInputField,
} from '@gluestack-ui/themed';
import { ComponentProps, FC } from 'react';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

interface InputProps {
  disabled?: boolean;
  onChange?: ComponentProps<typeof GluestackInputField>['onChange'];
  onChangeText?: ComponentProps<typeof GluestackInputField>['onChangeText'];
  placeholder?: string;
  type?: `${InputType}`;
}

export const Input: FC<InputProps> = (props) => {
  const {
    disabled = false,
    onChange,
    onChangeText,
    placeholder,
    type = InputType.TEXT,
  } = props;

  return (
    <GluestackInput isDisabled={disabled}>
      <GluestackInputField
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onChangeText={onChangeText}
      />
    </GluestackInput>
  );
};
