import { Radio, RadioLabel as GluestackRadioLabel } from '@gluestack-ui/themed';
import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { extendComponent } from 'utils';

import { RadioVariant } from '../RadioGroup';

import { ExtendProps } from './types';

type Props = {
  children: string;
  value: string;
  style?: StyleProp<ViewStyle>;
};

const GluestackRadio = extendComponent<typeof Radio, ExtendProps>(Radio);

export const RadioButton: FC<Props> = (props) => {
  const { value, children, style } = props;

  return (
    <GluestackRadio variant={RadioVariant.BUTTON} value={value} style={style}>
      <GluestackRadioLabel>{children}</GluestackRadioLabel>
    </GluestackRadio>
  );
};

export * from './types';
