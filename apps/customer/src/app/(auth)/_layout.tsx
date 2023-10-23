import { Redirect, Stack } from 'expo-router';
import React, { FC } from 'react';

import { useFirebaseUser } from '@hero24/common';

const AppLayout: FC = () => {
  const { user } = useFirebaseUser();

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (user) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/" />;
  }

  // This layout can be deferred because it's not the root layout.
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AppLayout;
