import { Redirect, Tabs } from 'expo-router';
import { FC, useMemo } from 'react';

import { TabsContainer, useFirebaseUser } from '@hero24/common';

import { bottomTabRoutes } from '$core';
import { useCheckRequiredProfileFields } from '$modules';

const AppLayout: FC = () => {
  const { user } = useFirebaseUser();
  const { hasRequiredFields } = useCheckRequiredProfileFields();

  const tabs = useMemo(
    () =>
      bottomTabRoutes.map((routeProps) => (
        <Tabs.Screen key={routeProps.name} {...routeProps} />
      )),
    [],
  );

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!user) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/" />;
  }

  if (!hasRequiredFields) {
    return <Redirect href="/(profile)/set-profile" />;
  }
  // This layout can be deferred because it's not the root layout.

  return <Tabs tabBar={TabsContainer}>{tabs}</Tabs>;
};

export default AppLayout;
