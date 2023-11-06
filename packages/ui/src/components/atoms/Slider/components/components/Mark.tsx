import { Text } from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import { SliderMarkArrangement } from '../../types';

type Props = {
  children: string;
  currentIndex: number;
  markWidth: number;
  maxIndex: number;
};

export const Mark: FC<Props> = (props) => {
  const { children, currentIndex, markWidth, maxIndex } = props;

  const styles = useStyles(markWidth, currentIndex, maxIndex);

  return <Text style={styles}>{children}</Text>;
};

export const useStyles = (
  width: number,
  markIndex: number,
  maxIndex: number,
): ViewStyle => {
  const styles = StyleSheet.create({
    [SliderMarkArrangement.FIRST]: {
      flex: 1,
      textAlign: 'left',
    },
    [SliderMarkArrangement.LAST]: {
      flex: 1,
      textAlign: 'right',
    },
    [SliderMarkArrangement.INNER]: {
      width,
      textAlign: 'center',
    },
  });

  if (markIndex === 0) {
    return styles[SliderMarkArrangement.FIRST];
  }

  if (markIndex === maxIndex) {
    return styles[SliderMarkArrangement.LAST];
  }

  return styles[SliderMarkArrangement.INNER];
};
