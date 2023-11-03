import { Redirect } from 'expo-router';
import { FC } from 'react';

import { useFirebaseUser } from '@hero24/common';

const Home: FC = () => {
  const { user } = useFirebaseUser();

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  return <Redirect href="/home" />;
};

export default Home;
