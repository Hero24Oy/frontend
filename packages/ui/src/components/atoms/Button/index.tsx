import {
  Button as GluestackButton,
  ButtonIcon as GluestackButtonIcon,
  ButtonText as GluestackTextOrigin,
} from '@gluestack-ui/themed';
import React, { ComponentProps, FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { CommonStyles } from 'types';

import { buttonSizeConfig, buttonStylesConfig } from './constants';
import { ButtonSize } from './enums';
import { ButtonStyles, Icon } from './types';
import { getDirectionValues } from './utils';

type Props = {
  children: string;
  icon?: Icon;
  isDisabled?: boolean;
  onPress?: ComponentProps<typeof GluestackButton>['onPress'];
  style?: CommonStyles;
} & ButtonStyles;

export const Button: FC<Props> = (props) => {
  const {
    children,
    size,
    variant,
    isDisabled = false,
    onPress,
    icon,
    style,
  } = props;

  const direction = getDirectionValues(icon?.direction);
  const { textColor, iconColor, ...rest } = buttonStylesConfig[variant];
  const { fontSize, iconSize } = buttonSizeConfig[size];

  const isLeftOrUpperDirection = direction?.left || direction?.upper;

  return (
    <GluestackButton
      isDisabled={isDisabled}
      onPress={onPress}
      variant={variant}
      style={[
        styles.common,
        styles[size],
        direction?.upper && styles.upper,
        style,
      ]}
      {...rest}
    >
      {isLeftOrUpperDirection && (
        <GluestackButtonIcon
          height={iconSize}
          color={iconColor}
          as={icon?.src}
        />
      )}

      <GluestackTextOrigin
        fontSize={fontSize}
        color={textColor}
        style={styles.text}
      >
        {children}
      </GluestackTextOrigin>

      {direction?.right && (
        <GluestackButtonIcon
          height={iconSize}
          color={iconColor}
          as={icon?.src}
        />
      )}
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
  },
  [ButtonSize.LARGE]: {
    width: '100%',
    paddingVertical: 11,
  },
  [ButtonSize.MEDIUM]: {
    paddingVertical: 10,
  },
  [ButtonSize.SMALL]: {
    paddingVertical: 8,
  },
  text: {
    textDecorationLine: 'none',
  },
  upper: {
    flexDirection: 'column',
    gap: 8,
  },
});
