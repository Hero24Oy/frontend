import { Control, FieldValues, Path } from 'react-hook-form';
import { KeyboardType } from 'react-native';

export enum InputSize {
  SMALL = 'sm',
  MEDIUM = 'md',
}

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

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
