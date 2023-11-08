import { Redirect, Tabs } from 'expo-router';
import { FC } from 'react';

import { TabsContainer, useFirebaseUser } from '@hero24/common';

import { routes } from '$/core';

const AppLayout: FC = () => {
  const { user } = useFirebaseUser();

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!user) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  // This layout can be deferred because it's not the root layout.

  return (
    <Tabs tabBar={TabsContainer}>
      {routes.map((routeProps) => (
        <Tabs.Screen key={routeProps.name} {...routeProps} />
      ))}
    </Tabs>
  );
};

export default AppLayout;
