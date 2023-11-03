import {
  CircleIcon,
  Radio as GluestackRadio,
  RadioIcon,
  RadioIndicator as GluestackRadioIndicator,
  RadioLabel,
} from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';

import { RadioVariant } from '../RadioGroup';

import { GluestackRadioIndicatorProps } from './types';

import { Size } from '$theme';

type Props = {
  size: `${Size}`;
} & PropsWithChildren<GluestackRadioIndicatorProps>;

export const RadioIndicator: FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return (
    <GluestackRadio variant={RadioVariant.RADIO_INDICATOR} {...restProps}>
      <GluestackRadioIndicator>
        <RadioIcon as={CircleIcon} />
      </GluestackRadioIndicator>

      <RadioLabel>{children}</RadioLabel>
    </GluestackRadio>
  );
};
