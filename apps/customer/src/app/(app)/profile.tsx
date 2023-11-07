import { FC } from 'react';

import { useCachedGraphQlUser, useLogout } from '@hero24/common';
import { Button, Text, View } from '@hero24/ui';

const Profile: FC = () => {
  const handleLogout = useLogout();
  const { user } = useCachedGraphQlUser();

  return (
    <View>
      <Text>Hello</Text>
      <Text>{user.data.email}</Text>
      <Button variant="solid" size="md" onPress={handleLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Profile;
