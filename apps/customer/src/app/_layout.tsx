import { ApolloProvider } from '@apollo/client';
import { Slot, SplashScreen } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { FC } from 'react';
import { combineProviders } from 'react-combine-providers';

import {
  initializeFirebaseAuth,
  useHideSplashScreen,
  useInitializeApp,
} from '@hero24/common';
import { attachUiProviders } from '@hero24/ui';

import 'expo-dev-client';
import { apolloClient, auth } from '$/core';

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

  useHideSplashScreen(isAppInitialized);

  if (!isAppInitialized) {
    return null;
  }

  return <Slot />;
};

export default MainProvider;
