import { Link } from 'expo-router';
import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';

const Home: FC = () => {
  return (
    <SafeAreaView>
      <Text>Hello, world</Text>
      <Link href="/login">Login</Link>
      <Link href="/logged">Logged in</Link>
    </SafeAreaView>
  );
};

export default Home;
