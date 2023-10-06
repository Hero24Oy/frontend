import { Button } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';

const Home: FC = () => {
  return (
    <SafeAreaView>
      <Button>
        <Link href="/login">Login</Link>
      </Button>

      <Button>
        <Link href="/logged">My profile</Link>
      </Button>
    </SafeAreaView>
  );
};

export default Home;
