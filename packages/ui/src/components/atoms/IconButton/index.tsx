import {
  Button as GluestackButton,
  ButtonIcon as GluestackButtonIcon,
} from '@gluestack-ui/themed';
import { Colors, IconSize } from 'configs';
import { BaseIcon } from 'icons/Base/types';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { CommonStyles } from 'types';

import { IconButtonSize } from './enums';

interface Props {
  icon: BaseIcon;
  onPress?: () => void;
  size?: `${IconButtonSize}`;
  style?: CommonStyles;
}

export const IconButton: FC<Props> = (props) => {
  const { icon, size = IconButtonSize.MEDIUM, style, onPress } = props;

  return (
    <GluestackButton style={styles.button} onPress={onPress}>
      <GluestackButtonIcon
        style={[styles.common, styles[size], style]}
        as={icon}
      />
    </GluestackButton>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.GRAY_LIGHT_BACKGROUND,
  },
  common: {
    color: Colors.BLACK,
  },
  [IconButtonSize.LARGE]: {
    width: IconSize.LARGE,
    height: IconSize.LARGE,
  },
  [IconButtonSize.MEDIUM]: {
    width: IconSize.MEDIUM,
    height: IconSize.MEDIUM,
  },
  [IconButtonSize.SMALL]: {
    width: IconSize.SMALL,
    height: IconSize.SMALL,
  },
});
