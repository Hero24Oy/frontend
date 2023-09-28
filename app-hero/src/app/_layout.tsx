import { ApolloProvider } from '@apollo/client';
import { Slot } from 'expo-router';
import { FC } from 'react';

import { apolloClient } from '$/core';
import { providers } from '$ui-library';

providers.push(ApolloProvider, { client: apolloClient, children: null });

const MasterProvider = providers.master();

// TODO fix splash screen
// SplashScreen.preventAutoHideAsync();

const Layout: FC = () => {
  return (
    <MasterProvider>
      <ApolloProvider client={apolloClient}>
        <Slot />
      </ApolloProvider>
    </MasterProvider>
  );
};

export default Layout;
