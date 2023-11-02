import { Tabs } from 'expo-router';

import { ChatsIcon, HomeIcon, ProfileIcon, TasksIcon } from '@hero24/ui';

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
