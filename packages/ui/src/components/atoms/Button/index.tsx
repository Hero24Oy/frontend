import {
  Button as GluestackButton,
  ButtonIcon as GluestackButtonIcon,
  ButtonSpinner as GluestackButtonSpinner,
  ButtonText as GluestackButtonText,
} from '@gluestack-ui/themed';
import { FC, ForwardedRef, forwardRef } from 'react';
import { PressableProps, StyleSheet } from 'react-native';

import { buttonSxValue } from './constants';
import {
  ButtonAction,
  ButtonVariant,
  Direction,
  GluestackButtonProps,
} from './types';

import { Size } from '$theme';
import { CommonStyles } from '$types';

type Props = {
  children: string;
  action?: `${ButtonAction}`;
  icon?: FC;
  iconDirection?: `${Direction}`;
  isLoading?: boolean;
  size?: `${Size}`;
  style?: CommonStyles;
  variant?: `${ButtonVariant}`;
} & GluestackButtonProps;

export const Button = forwardRef<PressableProps, Props>(
  (props: Props, ref: ForwardedRef<PressableProps>): JSX.Element => {
    const {
      children,
      isDisabled = false,
      isLoading = false,
      icon,
      iconDirection,
      style,
      action,
      ...restProps
    } = props;

    const iconStyles = iconDirection && styles[iconDirection];

    const sx = buttonSxValue[action ?? ButtonAction.PRIMARY];

    const isIconShown = (!isLoading && icon) || null;

    return (
      <GluestackButton
        ref={ref}
        isDisabled={isDisabled || isLoading}
        style={[iconStyles, style]}
        action={action}
        sx={sx}
        {...restProps}
      >
        {isIconShown && <GluestackButtonIcon as={icon} />}

        {isLoading ? <GluestackButtonSpinner /> : null}

        <GluestackButtonText>{children}</GluestackButtonText>
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
