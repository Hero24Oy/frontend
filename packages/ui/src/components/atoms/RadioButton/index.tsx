import {
  Radio as GluestackRadio,
  RadioLabel as GluestackRadioLabel,
} from '@gluestack-ui/themed';
import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  children: string;
  value: string;
  style?: StyleProp<ViewStyle>;
}

export const RadioButton: FC<Props> = (props) => {
  const { value, children, style } = props;

  return (
    <GluestackRadio value={value} style={style}>
      <GluestackRadioLabel>{children}</GluestackRadioLabel>
    </GluestackRadio>
  );
};
