import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Heading, Text, VStack } from '@hero24/ui';

export const WelcomeHeading: FC = () => {
  return (
    <VStack style={styles.hStack}>
      {/* TODO replace heading and text content with i18n call */}
      <Heading variant="H1" style={styles.center}>
        Welcome to Hero24!
      </Heading>

      <Text variant="regular" style={styles.center}>
        Select an option to start
      </Text>
    </VStack>
  );
};

const styles = StyleSheet.create({
  hStack: {
    gap: 4,
  },
  center: {
    marginVertical: 0,
    textAlign: 'center',
  },
});
