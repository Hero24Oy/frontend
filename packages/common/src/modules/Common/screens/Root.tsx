import { Redirect } from 'expo-router';
import { useFirebaseUser } from 'modules';
import { FC } from 'react';

export const RootScreen: FC = () => {
  const { user } = useFirebaseUser();

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  return <Redirect href="/home" />;
};
