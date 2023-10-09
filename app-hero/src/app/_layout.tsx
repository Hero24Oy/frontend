import { ApolloProvider } from '@apollo/client';
import { Slot, SplashScreen } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { FC, useEffect, useState } from 'react';
import { combineProviders } from 'react-combine-providers';
import { SafeAreaView } from 'react-native-safe-area-context';

import 'expo-dev-client';
import { apolloClient, auth } from '$/core';
import { useGetUser } from '$common';
import { attachUiProviders } from '$ui-library';

WebBrowser.maybeCompleteAuthSession();

const manager = combineProviders();

attachUiProviders(manager);

manager.push(ApolloProvider, {
  children: null,
  client: apolloClient,
});

export const MasterProvider = manager.master();

SplashScreen.preventAutoHideAsync();

const MainProvider: FC = () => {
  return (
    <MasterProvider>
      <SafeAreaView>
        <PostProviderApp />
      </SafeAreaView>
    </MasterProvider>
  );
};

const PostProviderApp: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { getUser } = useGetUser({ skip: true });

  useEffect(() => {
    auth.onAuthStateChanged((newState) => {
      const callback = async (): Promise<void> => {
        if (!newState) {
          return;
        }

        // TODO use lazy query when it's available
        await getUser.refetch({ id: newState.uid });
      };

      setIsLoading(true);
      callback()
        .then(() => setIsLoading(false))
        .catch((error) => console.error(error));
    });
  }, []);

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
