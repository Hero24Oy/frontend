import { ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';

import { BlankRadioGroup } from '@hero24/ui';

import { useLogic } from './hooks';
import { RadioGroupProps } from './types';

export const RadioGroup = <Type extends FieldValues>(
  props: RadioGroupProps<Type>,
): ReactElement => {
  const { control, name, options, ...restProps } = props;

  const { stringifiedOptions, radioGroupHandler, radioGroupValue } = useLogic({
    control,
    name,
    options,
  });

  return (
    <BlankRadioGroup
      value={radioGroupValue}
      onChange={radioGroupHandler}
      options={stringifiedOptions}
      {...restProps}
    />
  );
};
