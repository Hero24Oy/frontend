import { Text } from '@gluestack-ui/themed';
import { FC, useCallback } from 'react';

import { SliderMarkArrangement } from '../../types';

import { useMarkStyles } from './hooks';

type Props = {
  children: string;
  currentIndex: number;
  markWidth: number;
  maxIndex: number;
};

export const Mark: FC<Props> = (props) => {
  const { children, currentIndex, markWidth, maxIndex } = props;

  const outerMarksStyles = useMarkStyles(markWidth);

  const getMarkStyleByArrangement = useCallback(
    (index: number) => {
      if (index === 0) {
        return outerMarksStyles[SliderMarkArrangement.FIRST];
      }

      if (index === maxIndex) {
        return outerMarksStyles[SliderMarkArrangement.LAST];
      }

      return outerMarksStyles[SliderMarkArrangement.INNER];
    },
    [maxIndex, markWidth],
  );

  return (
    <Text style={getMarkStyleByArrangement(currentIndex)}>{children}</Text>
  );
};
