import { Radio, RadioLabel as GluestackRadioLabel } from '@gluestack-ui/themed';
import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ExtendProps } from 'types/extendProps';

import { RadioVariant } from '../RadioGroup';

import { Variants } from './types';

type Props = {
  children: string;
  value: string;
  style?: StyleProp<ViewStyle>;
};

const GluestackRadio = Radio as ExtendProps<typeof Radio, Variants>;

export const RadioButton: FC<Props> = (props) => {
  const { value, children, style } = props;

  return (
    <GluestackRadio variant={RadioVariant.BUTTON} value={value} style={style}>
      <GluestackRadioLabel>{children}</GluestackRadioLabel>
    </GluestackRadio>
  );
};

export * from './types';
