import { FC, PropsWithChildren } from 'react';

import { BadgeContent } from './components';
import { BadgeAction, BadgeSize, BadgeVariant, IconPosition } from './types';

import { StyledOutlinedBadge, StyledSolidBadge } from '$components/styled';
import { BaseIcon } from '$icons/base';

type Props = PropsWithChildren<{
  icon: BaseIcon;
  variant: `${BadgeVariant}`;
  action?: `${BadgeAction}`;
  iconPosition?: `${IconPosition}`;
  size?: `${BadgeSize}`;
}>;

export const Badge: FC<Props> = (props) => {
  const {
    icon,
    iconPosition = IconPosition.RIGHT,
    children,
    variant,
    ...restProps
  } = props;

  const content = (
    <BadgeContent icon={icon} iconPosition={iconPosition}>
      {children}
    </BadgeContent>
  );

  if (variant === BadgeVariant.SOLID) {
    return <StyledSolidBadge {...restProps}>{content}</StyledSolidBadge>;
  }

  return <StyledOutlinedBadge {...restProps}>{content}</StyledOutlinedBadge>;
};

export * from './types';
