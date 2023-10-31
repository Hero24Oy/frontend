import { Checkbox } from '@gluestack-ui/themed';
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

export type CustomProps = {
  label: string;
  options: CheckboxOption[];
} & Partial<Size>;

export type CheckboxProps = PickedProps & CustomProps;
