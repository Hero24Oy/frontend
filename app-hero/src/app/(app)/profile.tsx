import { Button, ButtonText, Text, View } from '@gluestack-ui/themed';
import React, { FC, useCallback } from 'react';

import { auth } from '$/core';
import { useCachedGraphQlUser } from '$/modules';
import { useLogout } from '$common';

const Home: FC = () => {
  const handleLogout = useLogout();

  const { user } = useCachedGraphQlUser();

  const logoutHandler = useCallback(
    () =>
      handleLogout({
        firebaseAuth: auth,
      }),
    [handleLogout],
  );

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
