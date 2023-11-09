import { ApolloProvider } from '@apollo/client';
import { Slot, SplashScreen } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { FC, PropsWithChildren } from 'react';
import { combineProviders } from 'react-combine-providers';

import { initializeAuthStore, initializeFirebaseStore } from '@hero24/common';
import { attachUiProviders } from '@hero24/ui';

import 'expo-dev-client'; // used for dev menu for easier debug, does not affect anything else
import { authConfig } from '$configs';
import { apolloClient, auth, usePostProviderAppLogic } from '$core';

// we don't care about order here
WebBrowser.maybeCompleteAuthSession();
SplashScreen.preventAutoHideAsync();

const manager = combineProviders();

attachUiProviders(manager);
initializeFirebaseStore(auth);
initializeAuthStore(authConfig);

manager.push(ApolloProvider, {
  children: null,
  client: apolloClient,
});

export const MasterProvider = manager.master();

SplashScreen.preventAutoHideAsync();

const PostProviderApp: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const { isAppInitialized } = usePostProviderAppLogic();

  if (!isAppInitialized) {
    return null;
  }

  return children;
};

const PreProviderApp: FC = () => {
  return (
    <MasterProvider>
      <PostProviderApp>
        <Slot />
      </PostProviderApp>
    </MasterProvider>
  );
};

export default PreProviderApp;
