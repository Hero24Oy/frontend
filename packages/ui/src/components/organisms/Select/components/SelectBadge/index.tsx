import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Badge, HStack } from '$atoms';
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
    <HStack style={styles.badge}>
      <Badge variant="solid" action="muted" size={size}>
        {badgeText}
      </Badge>
    </HStack>
  );
};

const styles = StyleSheet.create({
  badge: {
    marginLeft: 8,
    paddingHorizontal: 4,
  },
});
