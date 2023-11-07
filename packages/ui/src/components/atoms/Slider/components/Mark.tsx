import { Text } from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet, TextStyle } from 'react-native';

type Props = {
  children: string;
  currentIndex: number;
  markWidth: number;
  maxIndex: number;
};

export const Mark: FC<Props> = (props) => {
  const { children, currentIndex, markWidth, maxIndex } = props;

  const styles = useStyle(markWidth, currentIndex, maxIndex);

  return <Text style={styles.mark}>{children}</Text>;
};

export const useStyle = (
  width: number,
  markIndex: number,
  maxIndex: number,
): { mark: TextStyle } => {
  const getStyle = (): TextStyle => {
    if (markIndex === 0) {
      return {
        flex: 1,
        textAlign: 'left',
      };
    }

    if (markIndex === maxIndex) {
      return {
        flex: 1,
        textAlign: 'right',
      };
    }

    return {
      width,
      textAlign: 'center',
    };
  };

  return StyleSheet.create({ mark: getStyle() });
};
