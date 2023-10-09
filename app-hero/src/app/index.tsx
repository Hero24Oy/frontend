import { Button, View } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useFirebaseUser } from '$/core';

const Home: FC = () => {
  const { user } = useFirebaseUser();

  return (
    <SafeAreaView>
      <View>
        {!user && (
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        )}

        {user && (
          <Button>
            <Link href="/profile">My profile</Link>
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
