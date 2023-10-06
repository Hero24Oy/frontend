import { Slot, SplashScreen } from 'expo-router';
import { FC } from 'react';

import { useHideSplashScreen, useInitializeApp } from '$common';
import { MasterProvider } from '$ui-library';

SplashScreen.preventAutoHideAsync();

const Layout: FC = () => {
  const { isAppInitialized } = useInitializeApp();

  useHideSplashScreen(isAppInitialized);

  if (!isAppInitialized) {
    return null;
  }

  return (
    <MasterProvider>
      <Slot />
    </MasterProvider>
  );
};

export default Layout;
