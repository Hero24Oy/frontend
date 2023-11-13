import { RadioGroup as GluestackRadioGroup, View } from '@gluestack-ui/themed';
import { ReactElement } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

import { useRadioGroup } from '../RadioGroup/hooks';
import { RadioGroupProps } from '../RadioGroup/types';

import { RadioSize } from '$atoms';
import { Radio } from '$atoms/Radio';
import { RadioTitle } from '$atoms/RadioTitle';
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

  const { radioGroupHandler, radioGroupValue } = useRadioGroup({
    name,
    control,
    options,
  });

  return (
    <View>
      <RadioTitle value={title} />

      <GluestackRadioGroup
        value={radioGroupValue}
        onChange={radioGroupHandler}
        style={style}
      >
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

export * from '../RadioGroup/types';
