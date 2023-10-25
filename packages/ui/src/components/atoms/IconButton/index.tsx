import { Button as GluestackButton } from '@gluestack-ui/themed';
import { BaseIcon } from 'icons/Base/types';
import React, { ComponentProps, FC } from 'react';
import { Sizes } from 'theme/enums';

import { InnerIconButton, InnerIconButtonText } from './components';

interface Props extends ComponentProps<typeof GluestackButton> {
  icon: BaseIcon;
  onPress?: () => void;
  size?: `${Sizes}`;
}

export const IconButton: FC<Props> = (props) => {
  const { icon, size = 'md', style, onPress } = props;

  return (
    <InnerIconButton size={size} onPress={onPress} style={style}>
      <InnerIconButtonText as={icon} />
    </InnerIconButton>
  );
};
