import { Button, View } from '@gluestack-ui/themed';
import { useFirebaseUser } from '@hero24/common';
import { Link } from 'expo-router';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home: FC = () => {
  const { user } = useFirebaseUser();

  return (
    <SafeAreaView>
      <View>
        {!user && (
          <Button>
            <Link href="/sign-in">Sign in</Link>
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
