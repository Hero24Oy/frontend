import { FC } from 'react';

import { Button, Text, View } from '@hero24/ui';

import { useLogic } from './useLogic';

export const ProfileScreen: FC = () => {
  const { user, logout } = useLogic();

  // TODO i18n
  return (
    <View>
      <Text>Hello</Text>
      <Text>{user.data.email}</Text>
      <Button variant="solid" size="md" onPress={logout}>
        Logout
      </Button>
    </View>
  );
};
