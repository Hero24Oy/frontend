import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Text, VStack } from '@hero24/ui';

export const ResetPasswordFormText: FC = () => {
  return (
    <VStack style={styles.textContainer}>
      {/* TODO replace with i18n call */}
      <Text variant="regular" color="BLACK_00" textAlign="justify">
        Don&apos;t worry about a forgotten password. We will send a link to your
        email to reset and set a new password.
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
});
