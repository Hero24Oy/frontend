import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, VStack } from '@hero24/ui';

import { GoogleSignInButton } from './GoogleSignInButton';

export const SignInProvidersButtons: FC = () => {
  return (
    <VStack style={styles.container}>
      {/* TODO replace buttons labels with i18n call */}
      <GoogleSignInButton />
      <Button variant="outline" size="md" isDisabled>
        Continue with Facebook
      </Button>
      <Button variant="outline" isDisabled>
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
