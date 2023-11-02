import {
  BadgeIcon as GluestackBadgeIcon,
  BadgeText as GluestackBadgeText,
} from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';

import {
  BadgeAction,
  BadgeSize,
  BadgeVariant,
  IconPosition,
} from './constants';

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

  const content = (
    <>
      {iconPosition === IconPosition.LEFT && <GluestackBadgeIcon as={icon} />}
      <GluestackBadgeText>{children}</GluestackBadgeText>
      {iconPosition === IconPosition.RIGHT && <GluestackBadgeIcon as={icon} />}
    </>
  );

  if (variant === BadgeVariant.SOLID) {
    return <StyledSolidBadge {...restProps}>{content}</StyledSolidBadge>;
  }

  return <StyledOutlinedBadge {...restProps}>{content}</StyledOutlinedBadge>;
};

export * from './constants';
