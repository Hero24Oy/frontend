import {
  Radio as GluestackRadio,
  RadioLabel as GluestackRadioLabel,
} from '@gluestack-ui/themed';
import { PropsWithChildren } from 'react';

import { GluestackChipProps } from './types';

import { RadioSize, RadioVariant } from '$components/atoms/RadioItem';
import { useLogic } from '$components/atoms/RadioItem/useLogic';
import { JsxElement } from '$types';

type Props<Value> = {
  value: Value;
  size?: RadioSize;
} & PropsWithChildren<GluestackChipProps>;

export const RadioChipItem = <Value,>(props: Props<Value>): JsxElement => {
  const { children, value, ...restProps } = props;

  const { stringifiedValue } = useLogic(value);

  return (
    <GluestackRadio
      value={stringifiedValue}
      variant={RadioVariant.CHIP}
      {...restProps}
    >
      <GluestackRadioLabel>{children}</GluestackRadioLabel>
    </GluestackRadio>
  );
};

export * from './types';
