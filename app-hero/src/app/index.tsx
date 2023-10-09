import { Button, View } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import React, { FC } from 'react';

const Home: FC = () => {
  return (
    <View>
      <Button>
        <Link href="/login">Login</Link>
      </Button>

      <Button>
        <Link href="/profile">My profile</Link>
      </Button>
    </View>
  );
};

export default Home;
