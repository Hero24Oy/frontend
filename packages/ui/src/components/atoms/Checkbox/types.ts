import { Control, FieldValues, Path } from 'react-hook-form';

import { Size } from '$theme';
import { CommonStyles } from '$types';

export type CheckboxOption = {
  label: string;
  value: string;
};

export type CheckboxOptionsProps = {
  options: CheckboxOption[];
  size: `${Size}`;
} & CommonStyles;

export type CheckboxGroupProps<Type extends FieldValues> = {
  control: Control<Type>;
  label: string;
  name: Path<Type>;
} & CheckboxOptionsProps &
  CommonStyles;
