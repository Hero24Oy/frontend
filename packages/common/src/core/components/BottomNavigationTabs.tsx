import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { routes } from 'core/routes';
import { Tabs } from 'expo-router';
import { FC, useCallback } from 'react';

import { BaseIcon, TabIconProps, TabIcons } from '@hero24/ui';

export const BottomNavigationTabs: FC = () => {
  const TabsContainer = useCallback((props: BottomTabBarProps) => {
    const { navigation, state, descriptors } = props;

    const tabsConfig: TabIconProps[] = state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const isFocused = state.index === index;

      const Icon = options.tabBarIcon;

      const onPress = (): void => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name, route.params);
        }
      };

      return {
        isFocused,
        onPress,
        Icon: Icon as BaseIcon,
        label: options.tabBarLabel as string,
      } satisfies TabIconProps;
    });

    return <TabIcons tabs={tabsConfig} />;
  }, []);

  return (
    <Tabs tabBar={TabsContainer}>
      {routes.map((routeProps) => (
        <Tabs.Screen key={routeProps.name} {...routeProps} />
      ))}
    </Tabs>
  );
};
