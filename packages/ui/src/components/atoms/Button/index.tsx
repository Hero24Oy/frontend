import {
  Button as GluestackButton,
  ButtonIcon as GluestackButtonIcon,
  ButtonSpinner as GluestackButtonSpinner,
  ButtonText as GluestackTextOrigin,
} from '@gluestack-ui/themed';
import { LineHeight } from 'configs';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { CommonStyles } from 'types';

import { buttonSizes, buttonVariants } from './constants';
import { ButtonSizes } from './enums';
import { ButtonStyles, Direction, Icon } from './types';

type Props = {
  children: string;
  icon?: Icon;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
  style?: CommonStyles;
} & ButtonStyles;

export const Button: FC<Props> = (props) => {
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

  const { spinnerColor, ...buttonStyle } = buttonVariants[variant];
  const { fontSize, iconSize } = buttonSizes[size];

  const iconStyles = icon?.direction && styles[icon.direction];
  const iconSizes = icon?.size ?? iconSize;

  const isIconShown = !isLoading && icon;
  const isSpinnerShown = isLoading && icon;

  return (
    <GluestackButton
      isDisabled={isDisabled || isLoading}
      onPress={onPress}
      style={[styles.common, styles[size], iconStyles, style]}
      {...buttonStyle}
    >
      {isIconShown && (
        <GluestackButtonIcon
          width={iconSizes}
          height={iconSizes}
          as={icon?.src}
        />
      )}

      {isSpinnerShown && (
        <GluestackButtonSpinner color={spinnerColor} size={iconSizes} />
      )}

      <GluestackTextOrigin fontSize={fontSize} style={styles.text}>
        {children}
      </GluestackTextOrigin>
    </GluestackButton>
  );
};

const styles = StyleSheet.create({
  common: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    height: 'auto',
    borderWidth: 1,
  },
  [ButtonSizes.LARGE]: {
    width: '100%',
    paddingVertical: 11,
  },
  [ButtonSizes.MEDIUM]: {
    paddingVertical: 10,
  },
  [ButtonSizes.SMALL]: {
    paddingVertical: 8,
  },
  text: {
    textDecorationLine: 'none',
    fontWeight: '500',
    lineHeight: LineHeight.DEFAULT,
  },
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
