import {
  CircleIcon,
  Radio as GluestackRadio,
  RadioIcon,
  RadioIndicator as GluestackRadioIndicator,
  RadioLabel,
} from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';

import { GluestackRadioIndicatorProps } from './types';

import { RadioOption, RadioSize, RadioVariant } from '$atoms/Radio';
import { useStringifiedValue } from '$hooks';

type Props = {
  value: RadioOption['value'];
  size?: RadioSize;
} & PropsWithChildren<GluestackRadioIndicatorProps>;

export const RadioIndicator: FC<Props> = (props) => {
  const { children, value, ...restProps } = props;

  const { stringifiedValue } = useStringifiedValue(value);

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
