import { Slot, SplashScreen } from 'expo-router';
import { FC } from 'react';

import { useHideSplashScreen } from '$/@hero24/common-library/src/hooks/useHideSplashScreen';
import { useInitializeApp } from '$/@hero24/common-library/src/hooks/useInitializeApp';
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
