import { FC } from 'react';

import { Button, Text, View } from '@hero24/ui';

import { useLogic } from './useLogic';

export const ProfileScreen: FC = () => {
  const { logout, user } = useLogic();

  // TODO replace with i18n
  return (
    <View>
      <Text>Hello</Text>
      <Text>{user.data.email}</Text>
      <Text>{user.data.firstName}</Text>
      <Text>{user.data.lastName}</Text>
      <Button variant="solid" size="md" onPress={logout}>
        Logout
      </Button>
    </View>
  );
};
