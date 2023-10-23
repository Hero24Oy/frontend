import {
  Button as GluestackButton,
  ButtonIcon as GluestackButtonIcon,
} from '@gluestack-ui/themed';
import { BaseIcon } from 'icons/Base/types';
import React, { FC } from 'react';
import { Sizes } from 'theme/enums';
import { CommonStyles } from 'types';

interface Props {
  icon: BaseIcon;
  onPress?: () => void;
  size?: `${Sizes}`;
  style?: CommonStyles;
}

export const IconButton: FC<Props> = (props) => {
  const { icon, size = Sizes.MEDIUM, style, onPress } = props;

  return (
    <GluestackButton size={size} onPress={onPress}>
      <GluestackButtonIcon style={style} as={icon} />
    </GluestackButton>
  );
};
