import { Redirect } from 'expo-router';
import { FC } from 'react';

import { useFirebaseUser } from '$common/modules';

export const RootScreen: FC = () => {
  const { user } = useFirebaseUser();

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  return <Redirect href="/home" />;
};
