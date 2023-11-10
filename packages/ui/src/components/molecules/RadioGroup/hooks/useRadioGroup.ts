import { useCallback, useEffect, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { RadioOption } from '../types';

type Params<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  options: RadioOption[];
};

type ReturnType = {
  radioGroupHandler: (value: string) => void;
  radioGroupValue: string;
};

export const useRadioGroup = <Type extends FieldValues>(
  params: Params<Type>,
): ReturnType => {
  const { control, name, options } = params;

  const [radioGroupValue, setRadioGroupValue] = useState<string>('');

  const {
    field: { onChange },
  } = useController({ name, control });

  useEffect(() => {
    options.forEach((option) => option.isChecked && onChange(option.value));
  }, []);

  const radioGroupHandler = useCallback((selectedValue: string) => {
    const radioValue = JSON.parse(selectedValue) as RadioOption['value'];

    onChange(radioValue);
    setRadioGroupValue(selectedValue);
  }, []);

  return {
    radioGroupValue,
    radioGroupHandler,
  };
};
