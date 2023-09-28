import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React, { FC } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const query = gql`
  query {
    silly
  }
`;

const Home: FC = () => {
  const data = useQuery<string>(query);

  console.log('data', data.data);

  return (
    <SafeAreaView>
      <View>
        <Text>Hello, world</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
