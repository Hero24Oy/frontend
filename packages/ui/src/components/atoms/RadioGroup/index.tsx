import { RadioGroup as GluestackRadioGroup } from '@gluestack-ui/themed';
import { ReactElement, useEffect } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { Radios } from './components';
import { RadioGroupProps } from './types';

import { Size } from '$theme';
import { LayoutStyles } from '$types';

type Props<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
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
