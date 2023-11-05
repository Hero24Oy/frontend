import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, VStack } from '@hero24/ui';

export const SignInProvidersButtons: FC = () => {
  return (
    <VStack style={styles.container}>
      {/* TODO replace buttons labels with i18n call */}
      <Button variant="outline" action="secondary">
        Continue with Apple
      </Button>
      <Button variant="outline" action="secondary">
        Continue with Google
      </Button>
      <Button variant="outline" action="secondary">
        Continue with Facebook
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 16,
    marginBottom: 16,
  },
});
