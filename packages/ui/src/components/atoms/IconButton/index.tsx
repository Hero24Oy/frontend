import { Button as GluestackButton } from '@gluestack-ui/themed';
import { BaseIcon } from 'icons/Base/types';
import React, { ComponentProps, FC } from 'react';

import { InnerIconButton, InnerIconButtonIcon } from './components';
import { IconSizes } from './types';

type Props = {
  icon: BaseIcon;
  onPress?: () => void;
  size?: `${IconSizes}`;
} & ComponentProps<typeof GluestackButton>;

export const IconButton: FC<Props> = (props) => {
  const { icon, size = IconSizes.MEDIUM, style, onPress } = props;

  return (
    <InnerIconButton size={size} onPress={onPress} style={style}>
      <InnerIconButtonIcon as={icon} />
    </InnerIconButton>
  );
};

export * from './types';
