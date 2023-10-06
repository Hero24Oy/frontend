import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, VStack } from '$ui-library';

export const SignWithButtons: FC = () => {
  return (
    <VStack style={styles.container}>
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
