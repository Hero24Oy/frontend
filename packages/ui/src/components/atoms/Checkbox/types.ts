import { Checkbox } from '@gluestack-ui/themed';
import { Control, FieldValues, Path } from 'react-hook-form';
import { Size } from 'types';

export type CheckboxOption = {
  label: string;
  value: string;
};

type GluestackCheckboxProps = Parameters<typeof Checkbox>[0];

export type PickedProps = Pick<
  GluestackCheckboxProps,
  'isDisabled' | 'isInvalid' | 'isRequired'
>;

export type CustomProps<Type extends FieldValues> = {
  control: Control<Type>;
  label: string;

  name: Path<Type>;
  options: CheckboxOption[];
} & Partial<Size>;

export type CheckboxProps<Type extends FieldValues> = PickedProps &
  CustomProps<Type>;
