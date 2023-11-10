import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Input, VStack } from '@hero24/ui';

import { useLogic } from './useLogic';

export const EmailSignInForm: FC = () => {
  const { control, onSubmit } = useLogic();

  return (
    <VStack style={styles.container}>
      {/* TODO replace button label and placeholders with i18n call */}
      <Input placeholder="Email" control={control} name="email" title="Email" />
      <Input
        placeholder="Password"
        type="password"
        control={control}
        name="password"
        title="Password"
        size="md"
      />
      <Button onPress={onSubmit}>Continue</Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 16,
  },
});
