import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { SelectSize } from '../../types';

import { SelectBadge } from './components';

import { VStack } from '$atoms';
import { StyledSelectText } from '$styled';

type Props = {
  badgeValue: number;
  size: SelectSize;
  text?: string;
};

export const SelectText: FC<Props> = ({ size, text, badgeValue }) => {
  const selectText = text || 'Not selected';

  return (
    <VStack style={styles.text}>
      <StyledSelectText numberOfLines={1} ellipsizeMode="tail">
        {selectText}
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
