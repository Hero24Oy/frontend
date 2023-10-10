import { ApolloProvider } from '@apollo/client';
import { Slot, SplashScreen } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { FC, useEffect } from 'react';
import { combineProviders } from 'react-combine-providers';

import 'expo-dev-client';
import { initializeFirebaseAuth } from '$common';
import { apolloClient, auth, useInitializeApp } from '$core';
import { attachUiProviders } from '$ui-library';

WebBrowser.maybeCompleteAuthSession();

const manager = combineProviders();

attachUiProviders(manager);
initializeFirebaseAuth(auth);

manager.push(ApolloProvider, {
  children: null,
  client: apolloClient,
});

export const MasterProvider = manager.master();

SplashScreen.preventAutoHideAsync();

const MainProvider: FC = () => {
  return (
    <MasterProvider>
      <PostProviderApp />
    </MasterProvider>
  );
};

const PostProviderApp: FC = () => {
  const { isLoading } = useInitializeApp();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    SplashScreen.hideAsync();
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return <Slot />;
};

export default MainProvider;
