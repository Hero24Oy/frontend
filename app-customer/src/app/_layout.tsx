import { Slot, SplashScreen } from 'expo-router';
import { FC } from 'react';

import { useHideSplashScreen, useInitializeApp } from '$common/hooks';
import { UiLibraryProvider } from '$ui-library';

SplashScreen.preventAutoHideAsync();

const Layout: FC = () => {
  const { isAppInitialized } = useInitializeApp();

  useHideSplashScreen(isAppInitialized);

  if (!isAppInitialized) {
    return null;
  }

  return (
    <UiLibraryProvider>
      <Slot />
    </UiLibraryProvider>
  );
};

export default Layout;