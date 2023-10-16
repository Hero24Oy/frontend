import { ApolloProvider } from '@apollo/client';
import { initializeFirebaseAuth } from '@hero24/common';
import { attachUiProviders } from '@hero24/ui-library';
import { Slot, SplashScreen } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { FC, useEffect } from 'react';
import { combineProviders } from 'react-combine-providers';

import 'expo-dev-client';
import { apolloClient, auth, useInitializeApp } from '$core';

WebBrowser.maybeCompleteAuthSession();

const manager = combineProviders();

attachUiProviders(manager);
initializeFirebaseAuth(auth);

manager.push(ApolloProvider, {
  children: null,
  client: apolloClient,
});

export const PreProviderApp = manager.master();

SplashScreen.preventAutoHideAsync();

const MainProvider: FC = () => {
  return (
    <PreProviderApp>
      <PostProviderApp />
    </PreProviderApp>
  );
};

const PostProviderApp: FC = () => {
  const { isAppInitialized } = useInitializeApp();

  useEffect(() => {
    if (!isAppInitialized) {
      return;
    }

    SplashScreen.hideAsync();
  }, [isAppInitialized]);

  if (!isAppInitialized) {
    return null;
  }

  return <Slot />;
};

export default MainProvider;
