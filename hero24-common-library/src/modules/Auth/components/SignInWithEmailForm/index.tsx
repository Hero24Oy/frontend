import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Input, VStack } from '$ui-library';

export const SignInWithEmailForm: FC = () => {
  return (
    <VStack style={styles.container}>
      {/* TODO replace button label and placeholders with i18n call */}
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
