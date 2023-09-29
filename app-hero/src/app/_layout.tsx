import { Slot } from 'expo-router';
import { FC } from 'react';

import { MasterProvider } from '$/core';

// TODO fix splash screen
// SplashScreen.preventAutoHideAsync();

const Layout: FC = () => {
  return (
    <MasterProvider>
      <Slot />
    </MasterProvider>
  );
};

export default Layout;
