import { Tabs } from 'expo-router';
import { FC } from 'react';

import { TabsContainer } from './TabsContainer';

import { routes } from '$common/core';

export const BottomNavigationTabs: FC = () => {
  return (
    <Tabs tabBar={TabsContainer}>
      {routes.map((routeProps) => (
        <Tabs.Screen key={routeProps.name} {...routeProps} />
      ))}
    </Tabs>
  );
};
