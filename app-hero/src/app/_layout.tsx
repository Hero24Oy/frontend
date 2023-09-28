import { Slot } from 'expo-router';
import { FC } from 'react';

import { MasterProvider } from '$/core';
import { ViewProvider } from '$ui-library';

// TODO fix splash screen
// SplashScreen.preventAutoHideAsync();

const Layout: FC = () => {
  return (
    <ViewProvider>
      <MasterProvider>
        <Slot />
      </MasterProvider>
    </ViewProvider>
  );
};

export default Layout;
