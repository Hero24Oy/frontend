import { Control, FieldValues, Path } from 'react-hook-form';

import { CommonStyles, Size } from '$types';

export type CheckboxOption = {
  label: string;
  value: string;
};

export type CheckboxOptionsProps = {
  options: CheckboxOption[];
  size: Size;
} & CommonStyles;

export type CheckboxGroupProps<Type extends FieldValues> = {
  control: Control<Type>;
  label: string;

  name: Path<Type>;
} & CheckboxOptionsProps &
  CommonStyles;
