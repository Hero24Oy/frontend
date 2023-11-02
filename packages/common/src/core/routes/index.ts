import { Tabs } from 'expo-router';

import { CheckSquareIcon, HomeIcon, MessageIcon, UserIcon } from '@hero24/ui';

export type ExpoTabProps = Pick<
  Parameters<typeof Tabs.Screen>[0],
  'name' | 'options'
>;

export const routes: ExpoTabProps[] = [
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
      tabBarIcon: CheckSquareIcon,
    },
  },
  {
    name: 'chats',
    options: {
      tabBarLabel: 'Chats',
      tabBarIcon: MessageIcon,
    },
  },
  {
    name: 'profile',
    options: {
      tabBarLabel: 'Profile',
      tabBarIcon: UserIcon,
    },
  },
];