import {
  CircleIcon,
  Radio as GluestackRadio,
  RadioIcon,
  RadioIndicator as GluestackRadioIndicator,
  RadioLabel,
} from '@gluestack-ui/themed';
import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { DIVIDER_PADDING } from './constants';
import { GluestackRadioIndicatorProps } from './types';

import { RadioSize, RadioVariant } from '$atoms/Radio';
import { useLogic } from '$atoms/Radio/useLogic';
import { JsxElement } from '$types';

type Props<Value> = {
  hasDivider: boolean;
  value: Value;
  size?: RadioSize;
} & PropsWithChildren<GluestackRadioIndicatorProps>;

export const RadioIndicator = <Value,>(props: Props<Value>): JsxElement => {
  const { children, value, hasDivider, style, ...restProps } = props;

  const { stringifiedValue } = useLogic(value);

  const styles = useStyles(hasDivider);

  return (
    <GluestackRadio
      variant={RadioVariant.RADIO_INDICATOR}
      value={stringifiedValue}
      style={[styles.component, style]}
      {...restProps}
    >
      <GluestackRadioIndicator>
        <RadioIcon as={CircleIcon} />
      </GluestackRadioIndicator>

      <RadioLabel>{children}</RadioLabel>
    </GluestackRadio>
  );
};

const useStyles = (hasDivider: boolean) => {
  return StyleSheet.create({
    component: {
      paddingHorizontal: hasDivider ? DIVIDER_PADDING : 0,
    },
  });
};
