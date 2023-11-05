import { Link } from 'expo-router';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Text, VStack } from '@hero24/ui';

export const Footer: FC = () => {
  return (
    <VStack style={styles.container}>
      {/* TODO - replace with i18n */}
      <Text>By using Hero24 you are agree to the</Text>
      {/* TODO - replace with correct link */}
      <Link href="/">
        {/* TODO - replace with i18n */}
        <Text color="BLACK_00">Service Provider Terms</Text>
      </Link>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
});
