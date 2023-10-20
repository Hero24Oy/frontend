import { Link } from 'expo-router';
import React, { FC } from 'react';

import { useFirebaseUser } from '@hero24/common';
import { Button, SafeAreaView, View } from '@hero24/ui';

const Home: FC = () => {
  const { user } = useFirebaseUser();

  return (
    <SafeAreaView>
      <View>
        {!user && (
          <Button variant="solid" size="medium">
            <Link href="/sign-in">Sign in</Link>
          </Button>
        )}

        {user && (
          <Button variant="solid" size="medium">
            <Link href="/profile">My profile</Link>
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
