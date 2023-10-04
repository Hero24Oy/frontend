import { ApolloProvider } from '@apollo/client';
import { Slot } from 'expo-router';
import { FC } from 'react';
import { combineProviders } from 'react-combine-providers';

import { apolloClient, auth } from '$/core';
import { AuthProvider } from '$common';
import { attachUiProviders } from '$ui-library';

const manager = combineProviders();

attachUiProviders(manager);

manager.push(ApolloProvider, {
  children: null,
  client: apolloClient,
});

export const MasterProvider = manager.master();

// TODO fix splash screen
// SplashScreen.preventAutoHideAsync();
const Layout: FC = () => {
  return (
    <MasterProvider>
      <AuthProvider firebaseAuth={auth}>
        <Slot />
      </AuthProvider>
    </MasterProvider>
  );
};

export default Layout;
