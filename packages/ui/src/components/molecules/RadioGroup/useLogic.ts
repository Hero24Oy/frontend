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

  const {
    field: { value: controllerValue, onChange },
  } = useController({ name, control });

  const [radioGroupValue, setRadioGroupValue] = useState<string>(
    JSON.stringify(controllerValue),
  );

  // * We need this to check predefined option via options config.
  useEffect(() => {
    options.forEach((option) => {
      const { isChecked, value } = option;

      if (isChecked && !controllerValue) {
        setRadioGroupValue(JSON.stringify(value));
        onChange(value);
      }
    });
  }, []);

  const radioGroupValueHandler = useCallback(
    (selectedValue: string) => {
      onChange(JSON.parse(selectedValue) as Value);
      setRadioGroupValue(selectedValue);
    },
    [onChange],
  );

  return {
    radioGroupValue,
    radioGroupValueHandler,
  };
};
