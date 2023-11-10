import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Color, Input, Pressable, Text, VStack } from '@hero24/ui';

import { EmailSignInFormProps } from './types';
import { useLogic } from './useLogic';

export const EmailSignInForm: FC<EmailSignInFormProps> = (props) => {
  const { onForgotPasswordCallback } = props;
  const { control, onSubmit, isLoading } = useLogic();

  return (
    <VStack style={styles.container}>
      {/* TODO replace with i18n call */}
      <Input
        placeholder="Enter"
        control={control}
        name="email"
        title="Email"
        keyboardType="email-address"
      />
      <VStack style={styles.passwordContainer}>
        <Input
          placeholder="Enter"
          type="password"
          control={control}
          name="password"
          title="Password"
        />
        <Pressable
          onPress={onForgotPasswordCallback}
          style={styles.forgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </Pressable>
      </VStack>
      <Button isLoading={isLoading} onPress={onSubmit}>
        Login
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  passwordContainer: {
    marginBottom: 32,
  },
  forgotPassword: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  forgotPasswordText: {
    color: Color.BLACK_00,
  },
});

export * from './types';
