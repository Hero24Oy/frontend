import {
  BadgeIcon as GluestackBadgeIcon,
  BadgeText as GluestackBadgeText,
} from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';

import { IconPosition } from '../types';

import { BaseIcon } from '$icons/base';

type Props = PropsWithChildren<{
  icon: BaseIcon | undefined;
  iconPosition?: `${IconPosition}`;
}>;

export const BadgeContent: FC<Props> = (props) => {
  const { icon, iconPosition, children } = props;

  return (
    <>
      {iconPosition === IconPosition.LEFT && <GluestackBadgeIcon as={icon} />}
      <GluestackBadgeText>{children}</GluestackBadgeText>
      {iconPosition === IconPosition.RIGHT && <GluestackBadgeIcon as={icon} />}
    </>
  );
};
