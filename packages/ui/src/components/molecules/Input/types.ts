import { Control, FieldValues, Path } from 'react-hook-form';
import { KeyboardType } from 'react-native';

import { Size } from '$theme';

export type InputSize = Extract<Size, 'sm' | 'md'>;

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

export type InputProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  isDisabled?: boolean;
  isHelperEnabled?: boolean;
  keyboardType?: KeyboardType;
  leftSlot?: JSX.Element;
  mask?: string;
  placeholder?: string;
  rightSlot?: JSX.Element;
  size?: InputSize;
  title?: string;
  type?: `${InputType}`;
};
