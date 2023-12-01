import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { Color, HStack, Text, View } from '@hero24/ui';

type Params = {
  paragraphs: string[];
};

export const useLogic = (params: Params) => {
  const { paragraphs } = params;

  const memoizedParagraphs = useMemo(
    () =>
      paragraphs.map((item, index) => {
        return (
          <HStack key={index} style={styles.paragraph}>
            <View style={styles.circle} />

            <Text>{item}</Text>
          </HStack>
        );
      }),
    [],
  );

  return memoizedParagraphs;
};

const styles = StyleSheet.create({
  paragraph: {
    alignItems: 'center',
    gap: 6,
  },
  circle: {
    width: 4,
    height: 4,
    backgroundColor: Color.DARK_00,
    borderRadius: 12,
  },
});
