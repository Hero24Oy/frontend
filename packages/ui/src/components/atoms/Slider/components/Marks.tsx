import { HStack, Text } from '@gluestack-ui/themed';
import React, { FC, useCallback, useMemo } from 'react';
import { ViewStyle } from 'react-native';

import { getOuterMarksStyles, styles } from '../styles';
import { MarkItems } from '../types';

const PADDING_COUNT = 2;

type Props = {
  marks: MarkItems;
  parentWidth: number;
};

export const Marks: FC<Props> = (props: Props) => {
  const { marks, parentWidth } = props;

  const outerMarksPadding = useMemo(
    () => parentWidth / marks.length / PADDING_COUNT,
    [parentWidth, marks],
  );

  const outerMarksStyles = useMemo(
    () => getOuterMarksStyles(outerMarksPadding),
    [outerMarksPadding, getOuterMarksStyles],
  );

  const getMarkContainerStyle = useCallback(
    (index: number): ViewStyle[] => {
      const markStyles: ViewStyle[] = [styles.mark];

      if (index === 0) {
        markStyles.push(outerMarksStyles.leftMark);
      }

      if (index === marks.length - 1) {
        markStyles.push(outerMarksStyles.rightMark);
      }

      return markStyles;
    },
    [styles, marks.length, outerMarksStyles],
  );

  return (
    <HStack style={styles.marksContainer}>
      {marks.map((mark, index) => {
        return (
          <HStack key={mark.label} style={getMarkContainerStyle(index)}>
            <Text>{mark.label}</Text>
          </HStack>
        );
      })}
    </HStack>
  );
};
