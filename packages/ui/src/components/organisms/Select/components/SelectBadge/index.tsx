import { FC } from 'react';

import { Badge } from '$atoms';
import { SelectSize } from '$components/organisms/Select/types';

type Props = {
  badgeValue: number;
  size: SelectSize;
};

export const SelectBadge: FC<Props> = ({ size, badgeValue }) => {
  const badgeText = `+${badgeValue}`;

  if (!badgeValue) {
    return null;
  }

  return (
    <Badge variant="solid" action="muted" size={size}>
      {badgeText}
    </Badge>
  );
};
