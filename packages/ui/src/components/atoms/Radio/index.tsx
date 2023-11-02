import {
  CircleIcon,
  Radio as GluestackRadio,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { RadioVariant } from '../RadioGroup';

import { GluestackRadioProps } from './types';

import { Size } from '$theme';

type Props = { size: `${Size}` } & PropsWithChildren<GluestackRadioProps>;

export const Radio: FC<Props> = (props) => {
  const { children, style, ...restProps } = props;

  return (
    <GluestackRadio
      variant={RadioVariant.RADIO}
      style={[styles.radio, style]}
      {...restProps}
    >
      <RadioIndicator>
        <RadioIcon as={CircleIcon} />
      </RadioIndicator>

      <RadioLabel>{children}</RadioLabel>
    </GluestackRadio>
  );
};

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
  },
});
