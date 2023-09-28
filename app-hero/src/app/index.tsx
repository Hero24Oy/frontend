import { ApolloProvider } from '@apollo/client';
import { Text, View } from '@gluestack-ui/themed';
import React, { FC } from 'react';

import { apolloInstance } from '$/core';

const Home: FC = () => {
  return (
    <View>
      <ApolloProvider client={apolloInstance}>
        <Text>Hello, world</Text>
      </ApolloProvider>
    </View>
  );
};

export default Home;
