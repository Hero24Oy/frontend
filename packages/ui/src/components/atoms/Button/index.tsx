import {
  Button as GluestackButton,
  ButtonIcon as GluestackButtonIcon,
  ButtonSpinner as GluestackButtonSpinner,
  ButtonText as GluestackTextOrigin,
} from '@gluestack-ui/themed';
import React, { ComponentProps, FC, ForwardedRef, forwardRef } from 'react';
import { PressableProps, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { ButtonSizes, ButtonVariants, Direction } from './types';

interface Props extends ComponentProps<typeof GluestackButton> {
  children: string;
  icon?: FC;
  iconDirection?: `${Direction}`;
  isLoading?: boolean;
  size?: `${ButtonSizes}`;
  style?: StyleProp<ViewStyle>;
  variant?: `${ButtonVariants}`;
}

const ButtonInner = (
  props: Props,
  ref: ForwardedRef<PressableProps>,
): JSX.Element => {
  const {
    children,
    size = ButtonSizes.MEDIUM,
    variant = ButtonVariants.SOLID,
    isDisabled = false,
    isLoading = false,
    onPress,
    icon,
    iconDirection,
    style,
    ...restProps
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
      {...restProps}
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
