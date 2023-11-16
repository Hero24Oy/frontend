import { useRouter } from 'expo-router';
import { FC } from 'react';

import { Button, Text } from '@hero24/ui';

export const HomeScreen: FC = () => {
  const router = useRouter();

  return (
    <>
      <Button
        onPress={() => {
          router.push('/set-profile');
        }}
      >
        Navigate to set
      </Button>
      <Text>Home page</Text>
    </>
  );
};
