import React, { FC, useCallback } from 'react';

import { useCachedGraphQlUser, useLogout } from '@hero24/common';
import { Button, Text, View } from '@hero24/ui';

const Profile: FC = () => {
  const handleLogout = useLogout();

  const { user } = useCachedGraphQlUser();

  const logoutHandler = useCallback(() => handleLogout(), [handleLogout]);

  return (
    <View>
      <Text>Hello</Text>
      <Text>{user.data.email}</Text>
      <Button
        variant="solid"
        size="md"
        onPress={(): void => {
          logoutHandler().catch((error) => console.error(error));
        }}
      >
        Logout
      </Button>
    </View>
  );
};

export default Profile;
