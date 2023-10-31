import { RadioGroup as GluestackRadioGroup } from '@gluestack-ui/themed';
import { ReactElement } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { Radios } from './components';
import { RadioGroupProps } from './types';

type Props<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
} & RadioGroupProps;

export const RadioGroup = <Type extends FieldValues>(
  props: Props<Type>,
): ReactElement => {
  const { name, control, ...restProps } = props;

  const {
    field: { value, onChange, ref },
  } = useController({ name, control });

  return (
    <GluestackRadioGroup value={value} onChange={onChange} ref={ref}>
      <Radios {...restProps} />
    </GluestackRadioGroup>
  );
};

export * from './types';
