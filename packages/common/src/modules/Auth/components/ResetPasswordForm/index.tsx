import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Input, VStack } from '@hero24/ui';

import { ResetPasswordFormProps } from './types';
import { useLogic } from './useLogic';

export const ResetPasswordForm: FC<ResetPasswordFormProps> = (props) => {
  const { control, onSubmitHandler, isLoading, isValid } = useLogic(props);

  return (
    <VStack style={styles.wrapper}>
      {/* TODO replace with i18n call */}
      <Input
        placeholder="Enter"
        control={control}
        name="email"
        title="Email"
        keyboardType="email-address"
      />
      <Button
        onPress={onSubmitHandler}
        isDisabled={!isValid}
        isLoading={isLoading}
      >
        Reset password
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 24,
  },
});

export * from './types';
