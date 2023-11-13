import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Badge, HStack } from '$components/atoms';
import { SelectSize } from '$components/organisms/Select/types';

type Props = {
  badgeValue: number;
  size: SelectSize;
};

export const SelectBadge: FC<Props> = ({ size, badgeValue }) => {
  if (!badgeValue) {
    return null;
  }

  return (
    <HStack style={styles.badge}>
      <Badge variant="solid" action="muted" size={size}>
        {`+${badgeValue}`}
      </Badge>
    </HStack>
  );
};

const styles = StyleSheet.create({
  badge: {
    marginLeft: 8,
    width: 26,
  },
});
