import {
  Button as GluestackButton,
  ButtonIcon as GluestackButtonIcon,
  ButtonSpinner as GluestackButtonSpinner,
  ButtonText as GluestackTextOrigin,
} from '@gluestack-ui/themed';
import { FC, ForwardedRef, forwardRef } from 'react';
import { PressableProps, StyleSheet } from 'react-native';

import { ButtonVariant, Direction, GluestackButtonProps } from './types';

import { Size } from '$theme';
import { CommonStyles } from '$types';

type Props = {
  children: string;
  icon?: FC;
  iconDirection?: `${Direction}`;
  isLoading?: boolean;
  size?: Extract<Size, 'sm' | 'md' | 'lg'>;
  style?: CommonStyles;
  variant?: `${ButtonVariant}`;
} & GluestackButtonProps;

export const Button = forwardRef<PressableProps, Props>(
  (props: Props, ref: ForwardedRef<PressableProps>): JSX.Element => {
    const {
      children,
      size = Size.MD,
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
  },
);

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
