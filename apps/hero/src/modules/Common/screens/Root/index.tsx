import { Redirect } from 'expo-router';
import { FC } from 'react';

import { useFirebaseUser } from '@hero24/common';

export const RootScreen: FC = () => {
  const { user } = useFirebaseUser();

  if (!user) {
    return <Redirect href="/address/" />;
  }

  return <Redirect href="/home" />;
};
