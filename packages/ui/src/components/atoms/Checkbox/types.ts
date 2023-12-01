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

export type OnChangeActionParams<Type extends FieldValues> = {
  name: Path<Type>;
  value: string[];
};

// we may add check that controller with such name is a array of string
export type CheckboxGroupProps<
  Type extends FieldValues,
  HasRootCheck = boolean,
> = {
  control: Control<Type>;
  name: Path<Type>;
  hasRootCheck?: HasRootCheck;
  onChangeAction?: (params: OnChangeActionParams<Type>) => void;
  style?: LayoutStyles;
} & CheckboxOptionsProps &
  (HasRootCheck extends true
    ? { hasRootCheck: true; label: string }
    : { hasRootCheck?: false; label?: never });
