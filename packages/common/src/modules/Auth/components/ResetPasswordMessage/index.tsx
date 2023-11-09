import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Color, Text, VStack } from '@hero24/ui';

export const ResetPasswordMessage: FC = () => {
  /* TODO replace with i18n call */
  const message =
    "Don't worry about a forgotten password. We will send a link to your email to reset and set a new password.";

  return (
    <VStack style={styles.textContainer}>
      <Text variant="regular" style={styles.message} textAlign="justify">
        {message}
      </Text>
    </VStack>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 12,
    marginTop: 24,
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  message: {
    color: Color.BLACK_00,
  },
});
