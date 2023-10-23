import {
  Radio as GluestackRadio,
  RadioLabel as GluestackRadioLabel,
} from '@gluestack-ui/themed';
import { LineHeight } from 'configs';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { CommonStyles } from 'types';

import { radioStyles } from './constants';

interface Props {
  children: string;
  value: string;
  style?: CommonStyles;
}

export const RadioButton: FC<Props> = (props) => {
  const { value, children, style } = props;

  const { sx } = radioStyles;

  return (
    <GluestackRadio value={value} style={[styles.button, style]} sx={sx}>
      <GluestackRadioLabel style={styles.label}>{children}</GluestackRadioLabel>
    </GluestackRadio>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    borderWidth: 1,
    borderRadius: 8,
    gap: 4,
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 12,
    paddingVertical: 8,
    lineHeight: LineHeight.DEFAULT,
  },
  indicator: {
    marginRight: 2,
  },
});
