/* eslint-disable react/no-unstable-nested-components -- TODO need to extract to a component */
import { Tabs } from 'expo-router';
import { FC } from 'react';

import { routes } from '@hero24/common';
import { BaseIcon, TabIconProps, TabIcons } from '@hero24/ui';

// import { useFirebaseUser } from '@hero24/common';
const AppLayout: FC = () => {
  // const { user } = useFirebaseUser();

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  // if (!user) {
  //   // On web, static rendering will stop here as the user is not authenticated
  //   // in the headless Node process that the pages are rendered in.
  //   return <Redirect href="/sign-in" />;
  // }

  // This layout can be deferred because it's not the root layout.
  // TODO get rid of titles in the top screen
  return (
    <Tabs
      tabBar={(props) => {
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
      }}
    >
      {routes.map((routeProps) => (
        <Tabs.Screen key={routeProps.name} {...routeProps} />
      ))}
    </Tabs>
  );
};

export default AppLayout;
