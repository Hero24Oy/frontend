import { Button as GluestackButton } from '@gluestack-ui/themed';
import { BaseIcon } from 'icons/Base/types';
import React, { ComponentProps, FC } from 'react';
import { Size } from 'theme/types';

import { InnerIconButton, InnerIconButtonIcon } from './components';

type Props = {
  icon: BaseIcon;
  size?: `${Size}`;
} & ComponentProps<typeof GluestackButton>;

export const IconButton: FC<Props> = (props) => {
  const { icon, size = Size.MEDIUM, ...restProps } = props;

  return (
    <InnerIconButton size={size} {...restProps}>
      <InnerIconButtonIcon as={icon} />
    </InnerIconButton>
  );
};
