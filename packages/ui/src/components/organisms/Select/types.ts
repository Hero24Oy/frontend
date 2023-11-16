import { PressableProps } from 'react-native';

import { Size } from '$theme';

export type SelectSize = Extract<Size, 'md' | 'sm'>;

export type SelectProps = PressableProps & {
  size: SelectSize;
  hasDivider?: boolean;
  label?: string;
  selectedValues?: string[];
};
