import { Slot, SplashScreen } from 'expo-router';
import { FC, useEffect } from 'react';

import { useInitializeApp } from '$common/hooks';
import { UiLibraryProvider } from '$ui-library';

SplashScreen.preventAutoHideAsync();

export const AppLayout: FC = () => {
  const { isAppInitialized } = useInitializeApp();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, [isAppInitialized]);

  if (!isAppInitialized) {
    return null;
  }

  return (
    <UiLibraryProvider>
      <Slot />
    </UiLibraryProvider>
  );
};
