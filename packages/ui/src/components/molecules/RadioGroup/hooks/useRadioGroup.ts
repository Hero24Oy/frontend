import { useCallback, useEffect, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { RadioOption } from '$atoms';

type Params<Type extends FieldValues, Value> = {
  control: Control<Type>;
  name: Path<Type>;
  options: RadioOption<Value>[];
};

type ReturnType = {
  radioGroupValue: string;
  radioGroupValueHandler: (value: string) => void;
};

export const useRadioGroup = <Type extends FieldValues, Value>(
  params: Params<Type, Value>,
): ReturnType => {
  const { control, name, options } = params;
  const [radioGroupValue, setRadioGroupValue] = useState<string>('');

  const {
    field: { onChange },
  } = useController({ name, control });

  useEffect(() => {
    options.forEach((option) => option.isChecked && onChange(option.value));
  }, []);

  const radioGroupValueHandler = useCallback((value: string) => {
    onChange(JSON.parse(value) as Value);
    setRadioGroupValue(value);
  }, []);

  return {
    radioGroupValue,
    radioGroupValueHandler,
  };
};
