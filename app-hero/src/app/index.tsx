import React, { FC } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { useGetOffer } from '$common';

const Home: FC = () => {
  const { getOffer } = useGetOffer({
    variables: {
      input: {
        offerId: '',
      },
    },
  });

  // TODO solemnly for debugging purposes and easier development, at final pr will be removed
  console.log('getOffer.data', getOffer.data);

  return (
    <SafeAreaView>
      <View>
        <Text>Hello, world</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
