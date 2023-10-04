import { Button, ButtonText } from '@gluestack-ui/themed';
import React, { FC, useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';

import { apolloClient, auth } from '$/core';
import { useAuthentication, useGetUser } from '$common';

const Home: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');

  const { getUser } = useGetUser({
    skip: true,
    variables: {
      id,
    },
  });

  const {
    providers: { signInEmail },
  } = useAuthentication(apolloClient, auth);

  const authHandler = (): void => {
    signInEmail({
      email: 'sysgears.login@gmail.com',
      password: 'maxum320',
    })
      .then(async (data) => {
        const { uid, accessToken } = data;

        // const user = await getUser.refetch({
        //   id: uid,
        // });

        setId(uid);

        // console.log('user.data', user);
      })
      .catch((err) => console.error(err));
  };

  console.log('getUser.data', getUser.data);

  return (
    <SafeAreaView>
      <Button
        onPress={(): void => {
          void getUser.fetchMore({});
          console.log('getUser.data', getUser.data);
        }}
      >
        <ButtonText>Get user</ButtonText>
      </Button>
      {getUser.data && <Text>Hello, {getUser.data.data.firstName}</Text>}
      {!getUser.data && (
        <View>
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
      )}
    </SafeAreaView>
  );
};

export default Home;
