import { BaseIcon } from 'icons/Base/types';
import React, { FC } from 'react';

import { InnerIconButton, InnerIconButtonIcon } from './components';
import { GluestackIconButtonProps } from './types';

import { Size } from '$theme/types';

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
