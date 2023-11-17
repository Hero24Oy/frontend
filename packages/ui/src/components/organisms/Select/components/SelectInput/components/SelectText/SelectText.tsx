import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { SelectBadge } from './components/SelectBadge';

import { VStack } from '$atoms';
import { SelectSize } from '$components/organisms/Select/types';
import { StyledSelectText } from '$styled';

type Props = {
  badgeValue: number;
  size: SelectSize;
  text: string;
};

export const SelectText: FC<Props> = ({ size, text, badgeValue }) => {
  return (
    <VStack style={styles.text}>
      <StyledSelectText numberOfLines={1} ellipsizeMode="tail">
        {text}
      </StyledSelectText>
      <SelectBadge badgeValue={badgeValue} size={size} />
    </VStack>
  );
};

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
