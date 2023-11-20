import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { SelectBadge } from '../SelectBadge';

import { VStack } from '$atoms';
import { SelectSize } from '$components/organisms/Select/types';
import { StyledSelectText } from '$styled';

type Props = {
  badgeValue: number;
  size: SelectSize;
  text: string;
};

export const SelectText: FC<Props> = (props) => {
  const { size, text, badgeValue } = props;

  return (
    <VStack style={styles.container}>
      <StyledSelectText
        style={styles.text}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {text}
      </StyledSelectText>
      <SelectBadge badgeValue={badgeValue} size={size} />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    marginRight: 8,
  },
});
