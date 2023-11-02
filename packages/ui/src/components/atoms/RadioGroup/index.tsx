import { RadioGroup as GluestackRadioGroup } from '@gluestack-ui/themed';
import { ReactElement, useEffect } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { Radios } from './components';
import { RadioDirection, RadioGroupProps } from './types';

import { Size } from '$theme';
import { LayoutStyles } from '$types';

type Props<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  itemDirection?: `${RadioDirection}`;
  size?: `${Size}`;
  style?: LayoutStyles;
} & RadioGroupProps;

export const RadioGroup = <Type extends FieldValues>(
  props: Props<Type>,
): ReactElement => {
  const {
    name,
    control,
    size = Size.MEDIUM,
    itemDirection = RadioDirection.VERTICAL,
    options,
    style,
    ...restProps
  } = props;

  const {
    field: { value, onChange, ref },
  } = useController({ name, control });

  useEffect(() => {
    options.forEach((option) => option.isChecked && onChange(option.value));
  }, []);

  return (
    <GluestackRadioGroup
      itemDirection={itemDirection}
      value={value}
      onChange={onChange}
      ref={ref}
      style={style}
    >
      <Radios size={size} options={options} {...restProps} />
    </GluestackRadioGroup>
  );
};

export * from './types';
