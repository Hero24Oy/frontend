import { Text } from '@gluestack-ui/themed';
import { FC, useCallback, useMemo } from 'react';

import { getMarkStyle } from '../../utils/getMarkStyle';

type Props = {
  children: string;
  currentIndex: number;
  markWidth: number;
  totalCount: number;
};

export const Mark: FC<Props> = (props) => {
  const { children, currentIndex, markWidth, totalCount } = props;

  const outerMarksStyles = useMemo(() => getMarkStyle(markWidth), [markWidth]);

  const getMarkStyleByArrangement = useCallback(
    (index: number) => {
      switch (index) {
        case 0:
          return outerMarksStyles.first;
        case totalCount:
          return outerMarksStyles.last;
        default:
          return outerMarksStyles.inner;
      }
    },
    [totalCount, markWidth],
  );

  return (
    <Text style={getMarkStyleByArrangement(currentIndex)}>{children}</Text>
  );
};
