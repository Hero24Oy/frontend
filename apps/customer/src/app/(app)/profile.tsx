import { FC } from 'react';

import { Button, Text, View } from '@hero24/ui';

import { useProfile } from '$modules';

const Profile: FC = () => {
  const { logout, user } = useProfile();

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

export default Profile;
