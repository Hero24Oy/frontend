import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Input, InputType, VStack } from '$ui-library';

export const EmailPasswordForm: FC = () => {
  return (
    <VStack style={styles.container}>
      {/* TODO replace button label and placeholders with i18n call */}
      <Input placeholder="Email" />
      <Input placeholder="Password" type={InputType.PASSWORD} />
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
