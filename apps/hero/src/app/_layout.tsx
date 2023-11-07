import { ApolloProvider } from '@apollo/client';
import { Slot, SplashScreen } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { FC, PropsWithChildren, useEffect } from 'react';
import { combineProviders } from 'react-combine-providers';

import { setAuthStore, setFirebaseStore } from '@hero24/common';
import { attachUiProviders } from '@hero24/ui';

import 'expo-dev-client'; // used for dev menu for easier debug, does not affect anything else
import { authConfig } from '$configs';
import { apolloClient, auth, useInitializeApp } from '$core';

// we don't care about order here
WebBrowser.maybeCompleteAuthSession();
SplashScreen.preventAutoHideAsync();

const manager = combineProviders();

attachUiProviders(manager);
setFirebaseStore(auth);
setAuthStore(authConfig);

manager.push(ApolloProvider, {
  children: null,
  client: apolloClient,
});

export const PreProviderApp = manager.master();

const MainProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
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

  return children;
};

const RootLayout: FC = () => {
  return (
    <PreProviderApp>
      <MainProvider>
        <Slot />
      </MainProvider>
    </PreProviderApp>
  );
};

export default RootLayout;
