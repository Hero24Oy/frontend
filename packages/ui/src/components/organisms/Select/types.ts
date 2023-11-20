import { Control, FieldValues, Path } from 'react-hook-form';
import { PressableProps } from 'react-native';

import { Size } from '$theme';

export type SelectSize = Extract<Size, 'md' | 'sm'>;

export type SelectProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  size: SelectSize;
  hasDivider?: boolean;
  label?: string;
} & PressableProps;
