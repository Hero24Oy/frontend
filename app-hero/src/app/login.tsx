import { Button, ButtonText } from '@gluestack-ui/themed';
import { Redirect } from 'expo-router';
import React, { FC, useState } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';

import { authConfig } from '$/configs';
import { auth } from '$/core';
import {
  useAuthentication,
  useEmailSignIn,
  useEmailSignUp,
  useFacebookAuth,
  useGoogleAuth,
  useSession,
} from '$common';

const Home: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useSession();

  const { signInWithCredentials } = useAuthentication(auth);
  const signInWithEmail = useEmailSignIn(auth);
  const signUpWithEmail = useEmailSignUp(auth);

  const signInWithGoogle = useGoogleAuth({
    onAuthSucceed: signInWithCredentials,
    androidClientId: authConfig.androidClientId,
    iosClientId: authConfig.iosClientId,
    webClientId: authConfig.webClientId,
  });

  const signInWithFacebook = useFacebookAuth({
    onAuthSucceed: signInWithCredentials,
    facebookAppId: authConfig.facebookAppId,
  });

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

  if (user) {
    return <Redirect href="/logged" />;
  }

  return (
    <SafeAreaView>
      <View>
        <Button onPress={registerHandler}>
          <ButtonText>Register</ButtonText>
        </Button>
        <Button
          onPress={(): void => {
            signInWithGoogle().catch((err) => console.error(err));
          }}
        >
          <ButtonText>Sign in google</ButtonText>
        </Button>
        <Button
          onPress={(): void => {
            signInWithFacebook().catch((err) => console.error(err));
          }}
        >
          <ButtonText>Sign in facebook</ButtonText>
        </Button>
        <View>
          <TextInput
            value={email}
            onChangeText={(text): void => {
              setEmail(text);
            }}
            placeholder="email"
          />
          <TextInput
            value={password}
            onChangeText={(text): void => {
              setPassword(text);
            }}
            placeholder="password"
          />
          <Button onPress={authHandler}>
            <ButtonText>Login</ButtonText>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
