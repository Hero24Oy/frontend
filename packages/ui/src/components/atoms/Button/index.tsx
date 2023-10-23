import {
  Button as GluestackButton,
  ButtonIcon as GluestackButtonIcon,
  ButtonSpinner as GluestackButtonSpinner,
  ButtonText as GluestackTextOrigin,
} from '@gluestack-ui/themed';
import React, { ForwardedRef, forwardRef } from 'react';
import { PressableProps, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { ButtonStyles, Direction, Icon } from './types';

type Props = {
  children: string;
  icon?: Icon;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
} & ButtonStyles;

const ButtonInner = (
  props: Props,
  ref: ForwardedRef<PressableProps>,
): JSX.Element => {
  const {
    children,
    size,
    variant,
    isDisabled = false,
    isLoading = false,
    onPress,
    icon,
    style,
  } = props;

  const iconStyles = icon?.direction && styles[icon.direction];

  const isIconShown = !isLoading && icon;
  const isSpinnerShown = isLoading && icon;

  return (
    <GluestackButton
      ref={ref}
      isDisabled={isDisabled || isLoading}
      onPress={onPress}
      variant={variant}
      size={size}
      style={[iconStyles, style]}
    >
      {isIconShown && (
        <GluestackButtonIcon
          width={icon.size}
          height={icon.size}
          as={icon?.src}
        />
      )}

      {isSpinnerShown && <GluestackButtonSpinner />}

      <GluestackTextOrigin>{children}</GluestackTextOrigin>
    </GluestackButton>
  );
};

export const Button = forwardRef(ButtonInner);

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
