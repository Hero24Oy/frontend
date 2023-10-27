import {
  Button as GluestackButton,
  ButtonIcon as GluestackButtonIcon,
  ButtonSpinner as GluestackButtonSpinner,
  ButtonText as GluestackTextOrigin,
} from '@gluestack-ui/themed';
import React, { FC, ForwardedRef, forwardRef } from 'react';
import { PressableProps, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import {
  ButtonSize,
  ButtonVariant,
  Direction,
  GluestackButtonProps,
} from './types';

type Props = {
  children: string;
  icon?: FC;
  iconDirection?: `${Direction}`;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
} & GluestackButtonProps;

const ButtonInner = (
  props: Props,
  ref: ForwardedRef<PressableProps>,
): JSX.Element => {
  const {
    children,
    size = ButtonSize.MEDIUM,
    variant = ButtonVariant.SOLID,
    isDisabled = false,
    isLoading = false,
    onPress,
    icon,
    iconDirection,
    style,
  } = props;

  const iconStyles = iconDirection && styles[iconDirection];

  const isIconShown = !isLoading && icon;

  return (
    <GluestackButton
      ref={ref}
      isDisabled={isDisabled || isLoading}
      onPress={onPress}
      variant={variant}
      size={size}
      style={[iconStyles, style]}
    >
      {isIconShown && <GluestackButtonIcon as={icon} />}

      {isLoading && <GluestackButtonSpinner />}

      <GluestackTextOrigin>{children}</GluestackTextOrigin>
    </GluestackButton>
  );
};

export const Button = forwardRef<PressableProps, Props>(ButtonInner);

const styles = StyleSheet.create({
  [Direction.TOP]: {
    flexDirection: 'column',
    gap: 8,
  },
  [Direction.LEFT]: {
    flexDirection: 'row',
  },
  [Direction.RIGHT]: {
    flexDirection: 'row-reverse',
  },
});

export * from './types';
