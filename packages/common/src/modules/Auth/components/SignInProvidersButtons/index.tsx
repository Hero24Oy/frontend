import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, VStack } from '@hero24/ui';

export const SignInProvidersButtons: FC = () => {
  return (
    <VStack style={styles.container}>
      {/* TODO replace buttons labels with i18n call */}
      <Button variant="outline" size="medium" isDisabled>
        Continue with Google
      </Button>
      <Button variant="outline" size="medium" isDisabled>
        Continue with Facebook
      </Button>
      <Button variant="outline" size="medium" isDisabled>
        Continue with Apple
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 16,
  },
});