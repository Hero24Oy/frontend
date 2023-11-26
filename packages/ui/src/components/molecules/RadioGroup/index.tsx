import { RadioGroup as GluestackRadioGroup, View } from '@gluestack-ui/themed';
import { ReactElement } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

import { RadioItems, RadioTitle } from './components';
import { useLogic } from './useLogic';

import { RadioOption, RadioSize, RadioVariant } from '$atoms';
import { LayoutStyles } from '$types';

type Props<Type extends FieldValues, Value> = {
  control: Control<Type>;
  name: Path<Type>;
  options: RadioOption<Value>[];
  variant: `${RadioVariant}`;
  childrenStyle?: LayoutStyles;
  hasDivider?: boolean;
  isRadioGroupDisabled?: boolean;
  size?: RadioSize;
  style?: LayoutStyles;
  title?: string;
};

export const RadioGroup = <Type extends FieldValues, Value>(
  props: Props<Type, Value>,
): ReactElement => {
  const {
    control,
    name,
    size,
    options,
    style,
    title,
    childrenStyle,
    hasDivider = false,
    ...restProps
  } = props;

  const { radioGroupValue, radioGroupValueHandler } = useLogic({
    control,
    name,
    options,
  });

  return (
    <View>
      <RadioTitle value={title} />

      <GluestackRadioGroup
        value={radioGroupValue}
        onChange={radioGroupValueHandler}
        style={style}
      >
        <RadioItems
          size={size}
          options={options}
          style={childrenStyle}
          hasDivider={hasDivider}
          {...restProps}
        />
      </GluestackRadioGroup>
    </View>
  );
};
