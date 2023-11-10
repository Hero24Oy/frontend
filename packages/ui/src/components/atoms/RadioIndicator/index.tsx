import {
  CircleIcon,
  Radio as GluestackRadio,
  RadioIcon,
  RadioIndicator as GluestackRadioIndicator,
  RadioLabel,
} from '@gluestack-ui/themed';
import { FC, PropsWithChildren, useMemo } from 'react';

import { GluestackRadioIndicatorProps } from './types';

import {
  RadioOption,
  RadioSize,
  RadioVariant,
} from '$organisms/RadioGroup/types';
import { stringifyRadioValue } from '$organisms/RadioGroup/utils';

type Props = {
  value: RadioOption['value'];
  size?: RadioSize;
} & PropsWithChildren<GluestackRadioIndicatorProps>;

export const RadioIndicator: FC<Props> = (props) => {
  const { children, value, ...restProps } = props;

  const memoizedValue = useMemo(() => stringifyRadioValue(value), []);

  return (
    <GluestackRadio
      variant={RadioVariant.RADIO_INDICATOR}
      value={memoizedValue}
      {...restProps}
    >
      <GluestackRadioIndicator>
        <RadioIcon as={CircleIcon} />
      </GluestackRadioIndicator>

      <RadioLabel>{children}</RadioLabel>
    </GluestackRadio>
  );
};
