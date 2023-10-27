import { BaseIcon } from 'icons/Base/types';
import React, { FC } from 'react';
import { Size } from 'theme/types';

import { InnerIconButton, InnerIconButtonIcon } from './components';
import { GluestackIconButtonProps } from './types';

type Props = {
  icon: BaseIcon;
  size?: `${Size}`;
} & GluestackIconButtonProps;

export const IconButton: FC<Props> = (props) => {
  const { icon, size = Size.MEDIUM, ...restProps } = props;

  return (
    <InnerIconButton size={size} {...restProps}>
      <InnerIconButtonIcon as={icon} />
    </InnerIconButton>
  );
};
