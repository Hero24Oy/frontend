import { Button, ButtonText } from '@gluestack-ui/themed';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { FC, useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';

import { auth, getUid } from '$/core';

const Home: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authHandler = () => {
    console.log('auth');
    console.log('email', email);
    console.log('password', password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        // const { user } = userCredential;
        // const { uid, accessToken } = user;
        // console.log('uid,accessToken', uid, accessToken);
      })
      .catch((error) => {
        console.error(error);
      })
      .then(async () => {
        const uid = await getUid();

        console.log('auth.currentUser', auth.currentUser);

        console.log('uid', uid);
      });
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hello, world</Text>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="email"
        />
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="password"
        />
        <Button onPress={authHandler}>
          <ButtonText>Login</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;
