import { useCallback, useEffect, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { RadioOption } from '$atoms';

type Params<Type extends FieldValues, Value> = {
  control: Control<Type>;
  name: Path<Type>;
  options: RadioOption<Value>[];
};

export const useLogic = <Type extends FieldValues, Value>(
  params: Params<Type, Value>,
) => {
  const { control, name, options } = params;
  const [radioGroupValue, setRadioGroupValue] = useState<string>('');

  const {
    field: { onChange },
  } = useController({ name, control });

  // * We need this to check predefined option via options config.
  useEffect(() => {
    options.forEach((option) => option.isChecked && onChange(option.value));
  }, []);

  const radioGroupValueHandler = useCallback(
    (value: string) => {
      onChange(JSON.parse(value) as Value);
      setRadioGroupValue(value);
    },
    [onChange],
  );

  return {
    radioGroupValue,
    radioGroupValueHandler,
  };
};
