/* eslint-disable @typescript-eslint/no-unsafe-assignment -- TODO fix any from icons */
import { Tabs } from 'expo-router';
import { FC } from 'react';

import { ChatsIcon, HomeIcon, ProfileIcon, TasksIcon } from '@hero24/ui';

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
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: TasksIcon,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ChatsIcon,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
