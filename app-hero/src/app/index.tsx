import { gql, useQuery } from '@apollo/client';
import React, { FC } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

// TODO remove
const query = gql`
  query {
    silly
  }
`;

const Home: FC = () => {
  const data = useQuery<string>(query);

  // TODO solemnly for debugging purposes and easier development, at final pr will be removed
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
