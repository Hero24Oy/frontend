import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { routes } from 'core/routes';
import { Tabs } from 'expo-router';
import { FC, memo, useMemo } from 'react';

import { TabIconProps, TabIcons } from '@hero24/ui';

import { prepareRouteConfig } from './utils';

const TabsContainer: FC<BottomTabBarProps> = memo((props) => {
  // expo router based logic to prepare config
  const tabsConfig: TabIconProps[] = prepareRouteConfig(props);

  // component that does not rely on expo router, but on TabIconProps[] interface
  return <TabIcons tabs={tabsConfig} />;
});

// Expo router based component for rendering tabs
export const BottomNavigationTabs: FC = () => {
  const tabs = useMemo(
    () =>
      routes.map((routeProps) => (
        <Tabs.Screen key={routeProps.name} {...routeProps} />
      )),
    [],
  );

  return <Tabs tabBar={TabsContainer}>{tabs}</Tabs>;
};
