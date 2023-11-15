import { Redirect } from 'expo-router';
import { FC } from 'react';

import { useCachedGraphQlUser } from '@hero24/common';
import { Text } from '@hero24/ui';

export const HomeScreen: FC = () => {
  const {
    user: {
      data: { email, firstName, lastName },
    },
  } = useCachedGraphQlUser();

  if (!email || !firstName || !lastName) {
    // if (true) {
    return <Redirect href="/set-profile" />;
  }

  return <Text>Home page</Text>;
};
