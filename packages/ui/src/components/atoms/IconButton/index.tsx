import { FC } from 'react';

import { GluestackIconButtonProps, IconButtonSize } from './types';

import { BaseIcon } from '$icons/base';
import { StyledIconButton, StyledIconButtonIcon } from '$styled';
import { Size } from '$theme';

type Props = {
  icon: BaseIcon;
  size?: IconButtonSize;
} & GluestackIconButtonProps;

export const IconButton: FC<Props> = (props) => {
  const { icon, size = Size.MD, ...restProps } = props;

  return (
    <StyledIconButton size={size} {...restProps}>
      <StyledIconButtonIcon as={icon} />
    </StyledIconButton>
  );
};

export * from './types';
