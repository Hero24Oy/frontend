import {
  Radio as GluestackRadio,
  RadioLabel as GluestackRadioLabel,
} from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';

import { GluestackRadioButtonProps } from './types';

import { RadioVariant } from '../RadioGroup';

type Props = PropsWithChildren<GluestackRadioButtonProps>;

export const RadioButton: FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return (
    <GluestackRadio variant={RadioVariant.BUTTON} {...restProps}>
      <GluestackRadioLabel>{children}</GluestackRadioLabel>
    </GluestackRadio>
  );
};

export * from './types';
