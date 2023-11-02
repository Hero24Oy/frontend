import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { TabIconProps } from '@hero24/ui';

// expo router based logic to prepare config
export const prepareRouteConfig = (
  props: BottomTabBarProps,
): TabIconProps[] => {
  const { state, descriptors, navigation } = props;

  const routeConfig: TabIconProps[] = state.routes.map((route, index) => {
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
      Icon,
      label: options.tabBarLabel as string,
    } satisfies TabIconProps;
  });

  return routeConfig;
};
