/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unsafe-assignment -- TODO fix any from icons */
import { Text } from '@gluestack-ui/themed';
import { Tabs } from 'expo-router';
import { FC, useMemo } from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import {
  BaseIcon,
  ChatsIcon,
  HomeIcon,
  ProfileIcon,
  TasksIcon,
  View,
} from '@hero24/ui';

const routes: Array<
  Pick<Parameters<typeof Tabs.Screen>[0], 'name' | 'options'>
> = [
  {
    name: 'home',
    options: {
      tabBarLabel: 'Home',
      tabBarIcon: HomeIcon,
    },
  },
  {
    name: 'tasks',
    options: {
      tabBarLabel: 'Tasks',
      tabBarIcon: TasksIcon,
    },
  },
  {
    name: 'chats',
    options: {
      tabBarLabel: 'Chats',
      tabBarIcon: ChatsIcon,
    },
  },
  {
    name: 'profile',
    options: {
      tabBarLabel: 'Profile',
      tabBarIcon: ProfileIcon,
    },
  },
];

const getBottomPadding = (): number => {
  const defaultPadding = 21;

  const iosBottomBarHeight = 8;

  const iosPadding = defaultPadding + iosBottomBarHeight;

  return Platform.OS === 'ios' ? iosPadding : defaultPadding;
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: getBottomPadding(),
    paddingTop: 12,
  },
  tabText: { fontSize: 14 },
  tab: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  centered: { alignItems: 'center' },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
  },
  backgroundFocused: {
    backgroundColor: 'red', // TODO colors enum
  },
  textFocused: {
    color: 'red',
  },
  iconFocused: {
    color: 'white',
  },
});

type TabIconProps = {
  Icon: BaseIcon;
  label: string;
  isFocused?: boolean;
  onPress?: () => void; // TODO get rid of
};

const TabIcon: FC<TabIconProps> = (props) => {
  const { isFocused, Icon, label, onPress } = props;

  const textStyles = isFocused
    ? [styles.tabText, styles.textFocused]
    : [styles.tabText];

  const iconWrapperStyles = isFocused
    ? [styles.iconWrapper, styles.backgroundFocused]
    : [styles.iconWrapper];

  const iconColor = isFocused ? 'white' : 'grey';

  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={styles.centered}
    >
      <View style={iconWrapperStyles}>
        <Icon size={20} color={iconColor} />
      </View>
      <Text style={textStyles}>{label}</Text>
    </TouchableOpacity>
  );
};

type TabIconsProps = {
  tabs: TabIconProps[];
};

// TODO naming
const TabIcons: FC<TabIconsProps> = (props) => {
  const { tabs } = props;

  const tabIcons = useMemo(
    () =>
      tabs.map((tabProps) => <TabIcon key={tabProps.label} {...tabProps} />),
    [tabs],
  );

  return <View style={styles.tabContainer}>{tabIcons}</View>;
};

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
  // TODO in array
  // TODO get rid of titles in the top screen
  // TODO to separate file
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
