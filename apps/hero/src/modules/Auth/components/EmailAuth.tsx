import { Button, Input, InputField, View } from '@hero24/ui';
import React, { FC, useState } from 'react';

import { useEmailSignIn, useEmailSignUp } from '@hero24/common';

export const EmailAuth: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signInWithEmail } = useEmailSignIn();
  const { signUpWithEmail } = useEmailSignUp();

  const signUpHandler = async (): Promise<void> => {
    try {
      await signUpWithEmail({
        email,
        password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const signInHandler = async (): Promise<void> => {
    try {
      await signInWithEmail({
        email,
        password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const emailChangeHandler = (newEmail: string): void => setEmail(newEmail);

  const passwordChangeHandler = (newPassword: string): void =>
    setPassword(newPassword);

  return (
    <View>
      <Input>
        <InputField
          value={email}
          onChangeText={emailChangeHandler}
          placeholder="email"
        />
      </Input>
      <Input>
        <InputField
          value={password}
          onChangeText={passwordChangeHandler}
          placeholder="password"
        />
      </Input>
      <Button variant="solid" size="medium" onPress={signUpHandler}>
        Sign up
      </Button>
      <Button variant="solid" size="medium" onPress={signInHandler}>
        Sign in
      </Button>
    </View>
  );
};
