import { Button, ButtonText, Text, View } from '@gluestack-ui/themed';
import { Redirect } from 'expo-router';
import React, { FC, useCallback } from 'react';

import { apolloClient, auth } from '$/core';
import { useCachedUser } from '$/modules';
import { useLogout } from '$common';

const Home: FC = () => {
  const { user } = useCachedUser();
  const handleLogout = useLogout();

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
