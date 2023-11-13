import { useCallback, useEffect, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { RadioOption } from '../types';

import { useStringifiedOptions } from './useStringifiedOptions';

type Params<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  options: RadioOption[];
};

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { control, name, options } = params;
  const { stringifiedOptions } = useStringifiedOptions(options);
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
    stringifiedOptions,
  };
};
