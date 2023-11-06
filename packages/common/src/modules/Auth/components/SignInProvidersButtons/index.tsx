import { FC } from 'react';
import { Platform, StyleSheet } from 'react-native';

import { Button, VStack } from '@hero24/ui';

import { AppleSignInButton } from './AppleSignInButton';

export const SignInProvidersButtons: FC = () => {
  const isIOS = Platform.OS === 'ios';

  return (
    <VStack style={styles.container}>
      {/* TODO replace buttons labels with i18n call */}
      {isIOS ? <AppleSignInButton /> : null}
      <Button variant="outline" isDisabled>
        Continue with Google
      </Button>
      <Button variant="outline" isDisabled>
        Continue with Facebook
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
