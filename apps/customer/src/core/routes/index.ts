import { Tabs } from 'expo-router';

import { CheckSquareIcon, HomeIcon, MessageIcon, UserIcon } from '@hero24/ui';

export type ExpoTabProps = Pick<
  Parameters<typeof Tabs.Screen>[0],
  'name' | 'options'
>;

export const bottomTabRoutes: ExpoTabProps[] = [
  {
    name: 'home',
    options: {
      headerTitle: 'Home',
      tabBarIcon: HomeIcon,
    },
  },
  {
    name: 'offers',
    options: {
      headerTitle: 'Offers',
      tabBarIcon: CheckSquareIcon,
    },
  },
  {
    name: 'chats',
    options: {
      headerTitle: 'Chats',
      tabBarIcon: MessageIcon,
    },
  },
  {
    name: '(profile)/profile',
    options: {
      headerTitle: 'Profile',
      tabBarIcon: UserIcon,
    },
  },
  {
    name: '(profile)/set-profile',
    options: {
      headerTitle: 'Set Profile',
      tabBarStyle: {
        display: 'none',
      },
      href: null,
    },
  },
];
