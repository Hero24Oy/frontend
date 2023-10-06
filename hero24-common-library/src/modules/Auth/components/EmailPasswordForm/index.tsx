import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Input, VStack } from '$ui-library';

export const EmailPasswordForm: FC = () => {
  return (
    <VStack style={styles.container}>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button>Continue</Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 16,
  },
});
