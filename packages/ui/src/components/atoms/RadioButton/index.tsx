import {
  Radio as GluestackRadio,
  RadioLabel as GluestackRadioLabel,
} from '@gluestack-ui/themed';
import React, { FC } from 'react';

import { RadioVariant } from '../RadioGroup';

import { GluestackRadioButtonProps } from './types';

type Props = {
  children: string;
} & GluestackRadioButtonProps;

export const RadioButton: FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return (
    <GluestackRadio variant={RadioVariant.BUTTON} {...restProps}>
      <GluestackRadioLabel>{children}</GluestackRadioLabel>
    </GluestackRadio>
  );
};

export * from './types';
