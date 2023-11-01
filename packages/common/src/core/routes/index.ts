import { Tabs } from 'expo-router';

import {
  BaseIcon,
  ChatsIcon,
  HomeIcon,
  ProfileIcon,
  TasksIcon,
} from '@hero24/ui';

// TODO fix ts types
export type ExpoTabProps = Pick<
  Parameters<typeof Tabs.Screen>[0],
  'name' | 'options'
>;

export const routes: ExpoTabProps[] = [
  {
    name: 'home',
    options: {
      tabBarLabel: 'Home',
      tabBarIcon: HomeIcon as BaseIcon,
    },
  },
  {
    name: 'tasks',
    options: {
      tabBarLabel: 'Tasks',
      tabBarIcon: TasksIcon as BaseIcon,
    },
  },
  {
    name: 'chats',
    options: {
      tabBarLabel: 'Chats',
      tabBarIcon: ChatsIcon as BaseIcon,
    },
  },
  {
    name: 'profile',
    options: {
      tabBarLabel: 'Profile',
      tabBarIcon: ProfileIcon as BaseIcon,
    },
  },
];
