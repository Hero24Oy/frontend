import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, VStack } from '$ui-library';

export const ContinueWithButtons: FC = () => {
  return (
    <VStack style={styles.container}>
      {/* TODO replace button labels with i18n call */}
      <Button disabled>Continue with Google</Button>
      <Button disabled>Continue with Facebook</Button>
      <Button disabled>Continue with Apple</Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 16,
  },
});
