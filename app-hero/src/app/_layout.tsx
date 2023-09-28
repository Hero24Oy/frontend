import { ApolloProvider } from '@apollo/client';
import { Slot } from 'expo-router';
import { FC } from 'react';

import { apolloClient } from '$/core';
import { MasterProvider } from '$ui-library';

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
