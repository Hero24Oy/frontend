import { Link } from 'expo-router';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Color, Text, VStack } from '@hero24/ui';

export const Footer: FC = () => {
  return (
    <VStack style={styles.container}>
      {/* TODO - replace with i18n */}
      <Text style={styles.text}>By using Hero24 you are agree to the</Text>
      {/* TODO - replace with correct link */}
      <Link href="/">
        {/* TODO - replace with i18n */}
        <Text style={styles.linkText}>Service Provider Terms</Text>
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
  text: {
    color: Color.GREY_01,
  },
  linkText: {
    textDecorationColor: Color.DARK_00,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});