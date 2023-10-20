import {
  Button as GluestackButton,
  ButtonIcon as GluestackButtonIcon,
  ButtonText as GluestackTextOrigin,
} from '@gluestack-ui/themed';
import { Loader } from 'lucide-react-native';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { CommonStyles } from 'types';

import { buttonSize, buttonStyles } from './constants';
import { ButtonSize } from './enums';
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

  const { textColor, iconColor, ...rest } = buttonStyles[variant];
  const { fontSize, iconSize } = buttonSize[size];
  const iconStyles = icon?.direction && styles[icon.direction];

  return (
    <GluestackButton
      isDisabled={isDisabled || isLoading}
      onPress={onPress}
      style={[styles.common, styles[size], iconStyles, style]}
      {...rest}
    >
      {icon && (
        <GluestackButtonIcon
          height={iconSize}
          color={iconColor}
          as={isLoading ? Loader : icon?.src}
        />
      )}

      <GluestackTextOrigin
        fontSize={fontSize}
        color={textColor}
        style={styles.text}
      >
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
    lineHeight: 21,
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
