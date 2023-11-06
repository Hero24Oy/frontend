import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { HStack, Text } from '@hero24/ui';

export const Or: FC = () => {
  return (
    <HStack style={styles.orBox}>
      {/* TODO replace "Or" with i18n call */}
      <Text>Or</Text>
    </HStack>
  );
};

const styles = StyleSheet.create({
  orBox: {
    paddingTop: 32,
    paddingBottom: 16,
    justifyContent: 'center',
  },
});
