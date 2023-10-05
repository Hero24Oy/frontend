import { Button, ButtonText } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';

const Home: FC = () => {
  return (
    <SafeAreaView>
      <Text>Hello, world</Text>

      <Button>
        <ButtonText>
          <Link href="/login">Login</Link>
        </ButtonText>
      </Button>
      <Button>
        <ButtonText>
          <Link href="/logged">My profile</Link>
        </ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export default Home;
