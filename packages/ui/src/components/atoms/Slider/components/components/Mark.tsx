import { Text } from '@gluestack-ui/themed';
import { FC, useCallback, useMemo } from 'react';

import { SliderMarkArrangement } from '../../types';
import { getMarkStyle } from '../../utils';

type Props = {
  children: string;
  currentIndex: number;
  markWidth: number;
  maxIndex: number;
};

export const Mark: FC<Props> = (props) => {
  const { children, currentIndex, markWidth, maxIndex } = props;

  const outerMarksStyles = useMemo(() => getMarkStyle(markWidth), [markWidth]);

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
