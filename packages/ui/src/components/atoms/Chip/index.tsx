import {
  Radio as GluestackRadio,
  RadioLabel as GluestackRadioLabel,
} from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';

import { GluestackChipProps } from './types';

import { RadioSize, RadioVariant } from '$atoms/RadioGroup/types';

type Props = { size: RadioSize } & PropsWithChildren<GluestackChipProps>;

export const Chip: FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return (
    <GluestackRadio variant={RadioVariant.CHIP} {...restProps}>
      <GluestackRadioLabel>{children}</GluestackRadioLabel>
    </GluestackRadio>
  );
};

export * from './types';
