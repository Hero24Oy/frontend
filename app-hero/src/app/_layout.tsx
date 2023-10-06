import { ApolloProvider } from '@apollo/client';
import { Slot, SplashScreen } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { FC, useEffect } from 'react';
import { combineProviders } from 'react-combine-providers';
import { SafeAreaView } from 'react-native-safe-area-context';

import 'expo-dev-client';
import { apolloClient, auth } from '$/core';
import { AuthProvider, useSession } from '$common';
import { attachUiProviders } from '$ui-library';

WebBrowser.maybeCompleteAuthSession();

const manager = combineProviders();

attachUiProviders(manager);

manager.push(ApolloProvider, {
  children: null,
  client: apolloClient,
});

manager.push(AuthProvider, {
  children: null,
  firebaseAuth: auth,
});

export const MasterProvider = manager.master();

SplashScreen.preventAutoHideAsync();

const MainProvider: FC = () => {
  return (
    <MasterProvider>
      <SafeAreaView>
        <PostProvider />
      </SafeAreaView>
    </MasterProvider>
  );
};

const PostProvider: FC = () => {
  const { isLoading } = useSession();

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
