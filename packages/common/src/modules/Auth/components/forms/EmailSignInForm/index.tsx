import { yupResolver } from '@hookform/resolvers/yup';
import { emailSignInFormValidationSchema } from 'core/validation';
import { useEmailSignIn, useEmailSignUp } from 'modules/Auth/hooks';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@hero24/ui';

interface FormData {
  email: string;
  password: string;
}

export const EmailSignInForm: FC = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(emailSignInFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const { signInWithEmail } = useEmailSignIn();
  const { signUpWithEmail } = useEmailSignUp();

  const signUp = async (data: FormData): Promise<void> => {
    try {
      await signUpWithEmail(data);
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async (data: FormData): Promise<void> => {
    try {
      await signInWithEmail(data);
    } catch (error) {
      console.error(error);
    }
  };

  const signInHandler = handleSubmit(signIn);
  const signUpHandler = handleSubmit(signUp);

  return (
    <>
      {/* TODO replace button label and placeholders with i18n call */}
      <Input
        placeholder="Email"
        control={control}
        name="email"
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        type="password"
        control={control}
        name="password"
      />
      <Button onPress={signInHandler}>Sign in</Button>
      <Button onPress={signUpHandler}>Sign up</Button>
    </>
  );
};
