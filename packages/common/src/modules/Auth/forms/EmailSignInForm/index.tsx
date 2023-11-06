import { yupResolver } from '@hookform/resolvers/yup';
import { emailSignInFormValidationSchema } from 'core/validation';
import { useCustomForm } from 'modules/Auth/hooks';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Input, Pressable, Text, VStack } from '@hero24/ui';

type FormData = {
  email: string;
  password: string;
};

export type EmailSignInFormProps = {
  onForgotPasswordHandler: () => void;
};

export const EmailSignInForm: FC<EmailSignInFormProps> = (props) => {
  const { onForgotPasswordHandler } = props;

  const onSubmit = (_data: FormData): void => {
    return undefined;
  };

  const { control, onSubmitHandler, isLoading } = useCustomForm<FormData>({
    resolver: yupResolver(emailSignInFormValidationSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
    onSubmit,
  });

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
          onPress={onForgotPasswordHandler}
          style={styles.forgotPassword}
        >
          <Text color="BLACK_00">Forgot password?</Text>
        </Pressable>
      </VStack>
      <Button isLoading={isLoading} onPress={onSubmitHandler}>
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
});
