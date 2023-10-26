import {
  Radio as GluestackRadio,
  RadioLabel as GluestackRadioLabel,
} from '@gluestack-ui/themed';
import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { extendProps } from 'utils';

import { RadioVariant } from '../RadioGroup';

import { ExtendProps } from './types';

type Props = {
  children: string;
  value: string;
  style?: StyleProp<ViewStyle>;
};

const ExtendGluestackRadio = extendProps<typeof GluestackRadio, ExtendProps>(
  GluestackRadio,
);

export const RadioButton: FC<Props> = (props) => {
  const { value, children, style } = props;

  return (
    <ExtendGluestackRadio
      variant={RadioVariant.BUTTON}
      value={value}
      style={style}
    >
      <GluestackRadioLabel>{children}</GluestackRadioLabel>
    </ExtendGluestackRadio>
  );
};

export * from './types';
