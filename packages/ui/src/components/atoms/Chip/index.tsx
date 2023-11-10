import {
  Radio as GluestackRadio,
  RadioLabel as GluestackRadioLabel,
} from '@gluestack-ui/themed';
import { FC, PropsWithChildren, useRef } from 'react';

import { GluestackChipProps } from './types';

import {
  RadioOption,
  RadioSize,
  RadioVariant,
} from '$organisms/RadioGroup/types';
import { stringifyRadioValue } from '$organisms/RadioGroup/utils';

type Props = {
  value: RadioOption['value'];
  size?: RadioSize;
} & PropsWithChildren<GluestackChipProps>;

export const Chip: FC<Props> = (props) => {
  const { children, value, ...restProps } = props;
  const valueRef = useRef(stringifyRadioValue(value));

  return (
    <GluestackRadio
      variant={RadioVariant.CHIP}
      value={valueRef.current}
      {...restProps}
    >
      <GluestackRadioLabel>{children}</GluestackRadioLabel>
    </GluestackRadio>
  );
};

export * from './types';
