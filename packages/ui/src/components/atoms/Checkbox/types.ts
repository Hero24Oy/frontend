import { Control, FieldValues, Path } from 'react-hook-form';

import { Size } from '$theme';
import { LayoutStyles } from '$types';

export type CheckboxOption = {
  label: string;
  value: string;
};

export type CheckboxOptionsProps = {
  hasRootCheck: boolean;
  options: CheckboxOption[];
  size?: Size;
};

// we may add check that controller with such name is a array of string
export type CheckboxGroupProps<
  Type extends FieldValues,
  FieldName = Path<Type>,
  HasRootCheck = boolean,
> = {
  control: Control<Type>;
  name: FieldName;
  hasRootCheck?: HasRootCheck;
  style?: LayoutStyles;
} & CheckboxOptionsProps &
  (HasRootCheck extends true
    ? { hasRootCheck: true; label: string }
    : { hasRootCheck?: false; label?: never });
