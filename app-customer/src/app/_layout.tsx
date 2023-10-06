import { Slot, SplashScreen } from 'expo-router';
import { FC, useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import { MasterProvider } from '$ui-library';

SplashScreen.preventAutoHideAsync();

const Layout: FC = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  const initializeApp = async (): Promise<void> => {
    // do some fetch here on app init
    setIsAppReady(true);
  };

  useEffect(() => {
    void initializeApp();
  }, []);

  const onLayoutRootView = useCallback((): void => {
    if (isAppReady) {
      void SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }

  return (
    <MasterProvider>
      <View onLayout={onLayoutRootView} />
      <Slot />
    </MasterProvider>
  );
};

export default Layout;
