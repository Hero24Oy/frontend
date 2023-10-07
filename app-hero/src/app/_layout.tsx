import { Slot, SplashScreen } from 'expo-router';
import { FC } from 'react';

import { useHideSplashScreen, useInitializeApp } from '$common';
import { MasterProvider } from '$ui-library';

SplashScreen.preventAutoHideAsync();

const Layout: FC = () => {
  const { isAppInitialized } = useInitializeApp();

  useHideSplashScreen(isAppInitialized);

  return isAppInitialized ? (
    <MasterProvider>
      <Slot />
    </MasterProvider>
  ) : null;
};

export default Layout;
