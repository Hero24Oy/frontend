import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Hidden, VStack } from '@hero24/ui';

import { AppleSignInButton } from './AppleSignInButton';

export const SignInProvidersButtons: FC = () => {
  return (
    <VStack style={styles.container}>
      {/* TODO replace buttons labels with i18n call */}
      <Hidden platforms={['web', 'android']}>
        <AppleSignInButton />
      </Hidden>

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
