import { FC, PropsWithChildren } from 'react';

import { BadgeContent } from './components';
import { BadgeAction, BadgeSize, BadgeVariant, IconPosition } from './enums';

import { StyledOutlinedBadge, StyledSolidBadge } from '$components/styled';
import { BaseIcon } from '$icons/base';

type Props = PropsWithChildren<{
  icon: BaseIcon;
  iconPosition: `${IconPosition}`;
  variant: `${BadgeVariant}`;
  action?: `${BadgeAction}`;
  size?: `${BadgeSize}`;
}>;

export const Badge: FC<Props> = (props) => {
  const { icon, iconPosition, children, variant, ...restProps } = props;

  if (variant === BadgeVariant.SOLID) {
    return (
      <StyledSolidBadge {...restProps}>
        <BadgeContent icon={icon} iconPosition={iconPosition}>
          {children}
        </BadgeContent>
      </StyledSolidBadge>
    );
  }

  return (
    <StyledOutlinedBadge {...restProps}>
      {' '}
      <BadgeContent icon={icon} iconPosition={iconPosition}>
        {children}
      </BadgeContent>
    </StyledOutlinedBadge>
  );
};

export * from './enums';
