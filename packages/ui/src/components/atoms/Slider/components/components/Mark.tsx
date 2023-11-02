import { Text } from '@gluestack-ui/themed';
import { FC, useCallback, useMemo } from 'react';

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
        return outerMarksStyles.first;
      }

      if (index === maxIndex) {
        return outerMarksStyles.last;
      }

      return outerMarksStyles.inner;
    },
    [maxIndex, markWidth],
  );

  return (
    <Text style={getMarkStyleByArrangement(currentIndex)}>{children}</Text>
  );
};
