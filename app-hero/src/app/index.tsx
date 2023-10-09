import { Button, View } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { auth } from '$/core';

const Home: FC = () => {
  return (
    <SafeAreaView>
      <View>
        {!auth.currentUser && (
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        )}

        {auth.currentUser && (
          <Button>
            <Link href="/profile">My profile</Link>
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
