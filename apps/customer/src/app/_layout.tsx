import { Slot, SplashScreen } from 'expo-router';
import { FC } from 'react';
import { combineProviders } from 'react-combine-providers';

import { attachUiProviders } from '@hero24/ui';

const manager = combineProviders();

attachUiProviders(manager);

const MasterProvider = manager.master();

SplashScreen.preventAutoHideAsync();

const Layout: FC = () => {
  return (
    <MasterProvider>
      <Slot />
    </MasterProvider>
  );
};

export default Layout;
