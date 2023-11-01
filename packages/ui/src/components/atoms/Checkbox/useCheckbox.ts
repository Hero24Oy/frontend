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
    field: { value, ref, onChange },
    fieldState: { error },
  } = useController({ name, control });

  const isAnythingChecked = value.length > 0;
  const isEverythingChecked = value.length === options.length;
  const isIndeterminate = isAnythingChecked && !isEverythingChecked;

  const onChangeHandler = useCallback(
    (newSelectedValues: string[]): void => {
      let valuesToUpdate: string[] = newSelectedValues;

      // If we click on main checkbox, then either check or uncheck everything
      if (newSelectedValues.includes(CHECKBOX_ROOT_VALUE)) {
        valuesToUpdate = isAnythingChecked
          ? []
          : options.map((option) => option.value);
      }

      onChange(valuesToUpdate);
    },
    [options, value],
  );

  return {
    isEverythingChecked,
    isIndeterminate,
    ref,
    errorMessage: error?.message,
    onChange: onChangeHandler,
    value,
  };
};
