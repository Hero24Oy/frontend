import {
  Radio as GluestackRadio,
  RadioLabel as GluestackRadioLabel,
} from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';

import { GluestackChipProps } from './types';

import {
  RadioOption,
  RadioSize,
  RadioVariant,
  stringifyRadioValue,
} from '$molecules';

type Props = {
  value: RadioOption['value'];
  size?: RadioSize;
} & PropsWithChildren<GluestackChipProps>;

export const Chip: FC<Props> = (props) => {
  const { children, value, ...restProps } = props;

  return (
    <GluestackRadio
      variant={RadioVariant.CHIP}
      value={stringifyRadioValue(value)}
      {...restProps}
    >
      <GluestackRadioLabel>{children}</GluestackRadioLabel>
    </GluestackRadio>
  );
};

export * from './types';
