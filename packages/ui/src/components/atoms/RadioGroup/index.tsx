import { RadioGroup as GluestackRadioGroup, View } from '@gluestack-ui/themed';
import { ReactElement, useEffect } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { Radio, RadioTitle } from './components';
import { RadioGroupProps, RadioSize } from './types';

import { LayoutStyles } from '$types';

type Props<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  childrenStyle?: LayoutStyles;
  size?: RadioSize;
  style?: LayoutStyles;
  title?: string;
} & RadioGroupProps;

export const RadioGroup = <Type extends FieldValues>(
  props: Props<Type>,
): ReactElement => {
  const {
    name,
    control,
    size,
    options,
    style,
    title,
    childrenStyle,
    ...restProps
  } = props;

  const {
    field: { value, onChange },
  } = useController({ name, control });

  useEffect(() => {
    options.forEach((option) => option.isChecked && onChange(option.value));
  }, []);

  return (
    <View>
      <RadioTitle value={title} />

      <GluestackRadioGroup value={value} onChange={onChange} style={style}>
        <Radio
          size={size}
          options={options}
          style={childrenStyle}
          {...restProps}
        />
      </GluestackRadioGroup>
    </View>
  );
};

export * from './types';
