import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { FC, memo } from 'react';

import { TabProps, Tabs } from '@hero24/ui';

import { prepareRouteConfig } from './utils';

export const TabsContainer: FC<BottomTabBarProps> = memo((props) => {
  // expo router based logic to prepare config
  const routesConfig: TabProps[] = prepareRouteConfig(props);

  // component that does not rely on expo router, but on TabIconProps[] interface
  return <Tabs routes={routesConfig} />;
});
