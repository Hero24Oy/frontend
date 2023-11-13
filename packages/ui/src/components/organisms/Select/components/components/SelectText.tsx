import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { SelectBadge } from './components';

import { SelectSize } from '$components';
import { VStack } from '$components/atoms';
import { StyledSelectText } from '$styled';

type Props = {
  badgeValue: number;
  size: SelectSize;
  text?: string;
};

export const SelectText: FC<Props> = ({ size, text, badgeValue }) => {
  return (
    <VStack style={styles.text}>
      <StyledSelectText numberOfLines={1} ellipsizeMode="tail">
        {text || 'Not selected'}
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
