import {
  CircleIcon,
  Radio as GluestackRadio,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';

import { RadioVariant } from '../RadioGroup';

import { GluestackRadioProps } from './types';

import { Size } from '$theme';

type Props = { size: `${Size}` } & PropsWithChildren<GluestackRadioProps>;

export const Radio: FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return (
    <GluestackRadio variant={RadioVariant.RADIO} {...restProps}>
      <RadioIndicator>
        <RadioIcon as={CircleIcon} />
      </RadioIndicator>

      <RadioLabel>{children}</RadioLabel>
    </GluestackRadio>
  );
};
