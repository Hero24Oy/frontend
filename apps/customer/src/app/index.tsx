import { Redirect } from 'expo-router';
import React, { FC } from 'react';

import { useFirebaseUser } from '@hero24/common';

const Home: FC = () => {
  const { user } = useFirebaseUser();

  if (user) {
    return <Redirect href="/profile" />;
  }

  return <Redirect href="/sign-in" />;
};

export default Home;
