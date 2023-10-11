import {
  Button,
  ButtonText,
  Input,
  InputField,
  View,
} from '@gluestack-ui/themed';
import React, { FC, useState } from 'react';

import { useEmailSignIn, useEmailSignUp } from '$common';

export const EmailAuth: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signInWithEmail } = useEmailSignIn();
  const { signUpWithEmail } = useEmailSignUp();

  const signUpHandler = (): void => {
    signUpWithEmail({
      email,
      password,
    }).catch((err) => console.error(err));
  };

  const authHandler = (): void => {
    signInWithEmail({
      email,
      password,
    }).catch((err) => console.error(err));
  };

  const handleEmailChange = (newEmail: string): void => setEmail(newEmail);

  const handlePasswordChange = (newPassword: string): void =>
    setPassword(newPassword);

  return (
    <View>
      <Input>
        <InputField
          value={email}
          onChangeText={handlePasswordChange}
          placeholder="email"
        />
      </Input>
      <Input>
        <InputField
          value={password}
          onChangeText={handleEmailChange}
          placeholder="password"
        />
      </Input>
      <Button onPress={signUpHandler}>
        <ButtonText>Sign up</ButtonText>
      </Button>
      <Button onPress={authHandler}>
        <ButtonText>Sign in</ButtonText>
      </Button>
    </View>
  );
};
