import { Button, ButtonText, Text, View } from '@gluestack-ui/themed';
import { Redirect } from 'expo-router';
import React, { FC } from 'react';

import { useSession } from '$common';

const Home: FC = () => {
  const { user, logout } = useSession();

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <View>
      <Text color="black">Hello</Text>
      <Text>{user.data.email}</Text>
      <Button
        onPress={(): void => {
          logout().catch((error) => console.error(error));
        }}
      >
        <ButtonText>Logout</ButtonText>
      </Button>
    </View>
  );
};

export default Home;
