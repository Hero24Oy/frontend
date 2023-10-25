import { Button as GluestackButton } from '@gluestack-ui/themed';
import { BaseIcon } from 'icons/Base/types';
import React, { ComponentProps, FC } from 'react';

import { InnerIconButton, InnerIconButtonText } from './components';
import { IconSizes } from './types';

interface Props extends ComponentProps<typeof GluestackButton> {
  icon: BaseIcon;
  onPress?: () => void;
  size?: `${IconSizes}`;
}

export const IconButton: FC<Props> = (props) => {
  const { icon, size = IconSizes.MEDIUM, style, onPress } = props;

  return (
    <InnerIconButton size={size} onPress={onPress} style={style}>
      <InnerIconButtonText as={icon} />
    </InnerIconButton>
  );
};

export * from './types';
