import { Redirect } from 'expo-router';
import { FC } from 'react';

import { useCachedGraphQlUser, useFirebaseUser } from '@hero24/common';

export const RootScreen: FC = () => {
  const { user } = useFirebaseUser();

  const {
    user: {
      data: { email, firstName, lastName },
    },
  } = useCachedGraphQlUser();

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  if (!email || !firstName || !lastName) {
    return <Redirect href="/set-profile" />;
  }

  return <Redirect href="/home" />;
};
