import { Slot, SplashScreen } from 'expo-router';
import { FC } from 'react';

import { MasterProvider } from '$ui-library';

SplashScreen.preventAutoHideAsync();

const Layout: FC = () => {
  return (
    <MasterProvider>
      <Slot />
    </MasterProvider>
  );
};

export default Layout;
