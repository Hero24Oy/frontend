import { ApolloProvider } from '@apollo/client';
import React, { FC } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { apolloInstance } from '$/core';

const Home: FC = () => {
  return (
    <SafeAreaView>
      <View>
        <ApolloProvider client={apolloInstance}>
          <Text>Hello, world</Text>
        </ApolloProvider>
      </View>
    </SafeAreaView>
  );
};

export default Home;
