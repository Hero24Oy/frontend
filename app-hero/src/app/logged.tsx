import { Button, ButtonText } from '@gluestack-ui/themed';
import { Redirect } from 'expo-router';
import React, { FC } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { useSession } from '$common';

const Home: FC = () => {
  const { user, logout } = useSession();

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 50 }}>Hello, {user.data.email}</Text>
        <Button
          onPress={(): void => {
            logout().catch((error) => console.error(error));
          }}
        >
          <ButtonText>Logout</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;
