import { RadioGroup as GluestackRadioGroup, View } from '@gluestack-ui/themed';
import { FC } from 'react';

import { BlankRadioGroupProps } from './types';

import { Radio, RadioTitle } from '$atoms';

export const BlankRadioGroup: FC<BlankRadioGroupProps> = (props) => {
  const {
    size,
    options,
    style,
    title,
    childrenStyle,
    value,
    onChange,
    ...restProps
  } = props;

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
