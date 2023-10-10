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

  const registerHandler = (): void => {
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

  return (
    <View>
      <Input>
        <InputField
          value={email}
          onChangeText={(text): void => setEmail(text)}
          placeholder="email"
        />
      </Input>
      <Input>
        <InputField
          value={password}
          onChangeText={(text): void => setPassword(text)}
          placeholder="password"
        />
      </Input>
      <Button onPress={registerHandler}>
        <ButtonText>Register</ButtonText>
      </Button>
      <Button onPress={authHandler}>
        <ButtonText>Login</ButtonText>
      </Button>
    </View>
  );
};
