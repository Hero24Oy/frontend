import { Slot, SplashScreen } from 'expo-router';
import { FC } from 'react';

import { attachUiProviders } from '@hero24/ui-library';
import { combineProviders } from 'react-combine-providers';

const manager = combineProviders()

attachUiProviders(manager)

const MasterProvider = manager.master()

SplashScreen.preventAutoHideAsync();

const Layout: FC = () => {
  return (
    <MasterProvider>
      <Slot />
    </MasterProvider>
  );
};

export default Layout;
