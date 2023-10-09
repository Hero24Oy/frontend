import { Button, ButtonText, Text, View } from '@gluestack-ui/themed';
import { Redirect } from 'expo-router';
import React, { FC, useCallback } from 'react';

import { apolloClient, auth } from '$/core';
import { useGetUser, useLogout } from '$common';

const Home: FC = () => {
  const handleLogout = useLogout();

  const {
    getUser: { data: user },
  } = useGetUser({
    variables: {
      id: auth.currentUser!.uid,
    },
  });

  const logoutHandler = useCallback(
    () =>
      handleLogout({
        apolloClient,
        firebaseAuth: auth,
      }),
    [handleLogout],
  );

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <View>
      <Text color="black">Hello</Text>
      <Text>{user.data.email}</Text>
      <Button
        onPress={(): void => {
          logoutHandler().catch((error) => console.error(error));
        }}
      >
        <ButtonText>Logout</ButtonText>
      </Button>
    </View>
  );
};

export default Home;
