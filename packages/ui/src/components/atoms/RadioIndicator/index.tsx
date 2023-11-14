import {
  CircleIcon,
  Radio as GluestackRadio,
  RadioIcon,
  RadioIndicator as GluestackRadioIndicator,
  RadioLabel,
} from '@gluestack-ui/themed';
import { PropsWithChildren } from 'react';

import { GluestackRadioIndicatorProps } from './types';

import { RadioSize, RadioVariant } from '$atoms/Radio';
import { useLogic } from '$atoms/Radio/useLogic';
import { JsxElement } from '$types';

type Props<Value> = {
  value: Value;
  size?: RadioSize;
} & PropsWithChildren<GluestackRadioIndicatorProps>;

export const RadioIndicator = <Value,>(props: Props<Value>): JsxElement => {
  const { children, value, ...restProps } = props;

  const { stringifiedValue } = useLogic(value);

  return (
    <GluestackRadio
      variant={RadioVariant.RADIO_INDICATOR}
      value={stringifiedValue}
      {...restProps}
    >
      <GluestackRadioIndicator>
        <RadioIcon as={CircleIcon} />
      </GluestackRadioIndicator>

      <RadioLabel>{children}</RadioLabel>
    </GluestackRadio>
  );
};
