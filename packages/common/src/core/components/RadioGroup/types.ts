import { Control, FieldValues, Path } from 'react-hook-form';

import { BlankRadioGroupProps } from '@hero24/ui';

import { Range } from '$core/types';

export type RadioOption = {
  label: string;
  value: string | Range;
  isChecked?: boolean;
  isDisabled?: boolean;
};

export type RadioGroupProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  options: RadioOption[];
} & Omit<BlankRadioGroupProps, 'options'>;
