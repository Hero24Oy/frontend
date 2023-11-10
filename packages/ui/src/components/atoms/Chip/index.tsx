import {
  Radio as GluestackRadio,
  RadioLabel as GluestackRadioLabel,
} from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';

import { GluestackChipProps } from './types';

import { RadioOption, RadioSize, RadioVariant } from '$atoms/Radio';
import { useStringifiedValue } from '$hooks';

type Props = {
  value: RadioOption['value'];
  size?: RadioSize;
} & PropsWithChildren<GluestackChipProps>;

export const Chip: FC<Props> = (props) => {
  const { children, value, ...restProps } = props;

  const { stringifiedValue } = useStringifiedValue(value);

  return (
    <GluestackRadio
      variant={RadioVariant.CHIP}
      value={stringifiedValue}
      {...restProps}
    >
      <GluestackRadioLabel>{children}</GluestackRadioLabel>
    </GluestackRadio>
  );
};

export * from './types';
