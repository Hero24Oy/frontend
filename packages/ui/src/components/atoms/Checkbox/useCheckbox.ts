import { useCallback } from 'react';
import {
  Control,
  FieldValues,
  Path,
  RefCallBack,
  useController,
} from 'react-hook-form';

import { CheckboxOption } from './types';

export const CHECKBOX_ROOT_VALUE = 'rootValue';

export type UseCheckboxProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  options: CheckboxOption[];
};

export type UseCheckboxReturnType = {
  isEverythingChecked: boolean;
  isIndeterminate: boolean;
  onChange: (newSelectedValues: string[]) => void;
  ref: RefCallBack;
  value: string[];
  errorMessage?: string;
};

export const useCheckbox = <Type extends FieldValues>(
  config: UseCheckboxProps<Type>,
): UseCheckboxReturnType => {
  const { control, name, options } = config;

  const {
    field,
    formState: { errors },
  } = useController({ name, control });

  // TODO better naming
  const onChange = useCallback(
    (newSelectedValues: string[]): void => {
      let valuesToUpdate: string[] = [];

      // If we click on main checkbox, then either check or uncheck everything
      if (newSelectedValues.includes(CHECKBOX_ROOT_VALUE)) {
        if (!field.value.length) {
          valuesToUpdate = options.map((option) => option.value);
        } else {
          valuesToUpdate = [];
        }
      } else {
        valuesToUpdate = newSelectedValues;
      }

      field.onChange(valuesToUpdate);
    },
    [options, field.value],
  );

  const isEverythingChecked = field.value.length === options.length;

  // Check if every option is checked, if not - upper option is indeterminate
  const isIndeterminate =
    field.value.length > 0 &&
    field.value.length !== options.length &&
    !isEverythingChecked;

  return {
    onChange,
    isIndeterminate,
    isEverythingChecked,
    errorMessage: errors[name]?.message as string,
    value: field.value as string[],
    ref: field.ref,
  };
};
