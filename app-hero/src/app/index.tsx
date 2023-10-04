/* eslint-disable eslint-comments/disable-enable-pair -- TODO clean before PR */
/* eslint-disable @typescript-eslint/explicit-function-return-type -- TODO clean before PR */
/* eslint-disable @cspell/spellchecker -- TODO clean before PR */
/* eslint-disable @typescript-eslint/no-explicit-any -- TODO clean before PR */
/* eslint-disable @typescript-eslint/no-unsafe-assignment -- TODO clean before PR */
import { Button, ButtonText } from '@gluestack-ui/themed';
import React, { FC, useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';

import { authConfig } from '$/configs';
import { auth } from '$/core';
import { useAuthentication, useGetUser } from '$common';

const Home: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { getUser } = useGetUser({
    skip: true,
    variables: {
      id: '',
    } as any,
    fetchPolicy: 'cache-first',
  });

  // TODO test on mobile
  const {
    providers: { signInWithEmail, signUpWithEmail, signInWithGoogle },
  } = useAuthentication({
    firebaseAuth: auth,
    googleAuth: {
      androidClientId: authConfig.androidClientId,
      iosClientId: authConfig.iosClientId,
      webClientId: authConfig.webClientId,
    },
  });

  // console.log('auth.currentUser', auth.currentUser);

  const registerHandler = (): void => {
    signUpWithEmail({
      email: 'testingsignup@testing.com',
      password: 'testing',
    })
      .then((res) => {
        // console.debug(res);
      })
      .catch((err) => console.error(err));
  };

  const authHandler = (): void => {
    signInWithEmail({
      email: 'sysgears.login@gmail.com',
      password: 'maxum320',
    })
      .then((data) => {
        // console.debug('data', data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <SafeAreaView>
      <Button onPress={registerHandler}>
        <ButtonText>Test register</ButtonText>
      </Button>
      <Button
        onPress={(): void => {
          signInWithGoogle().catch((err) => console.error(err));
        }}
      >
        <ButtonText>Sign in google</ButtonText>
      </Button>
      {getUser.data && <Text>Hello, {getUser.data.data.firstName}</Text>}
      {!getUser.data && (
        <View>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="email"
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="password"
          />
          <Button onPress={authHandler}>
            <ButtonText>Login</ButtonText>
          </Button>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
