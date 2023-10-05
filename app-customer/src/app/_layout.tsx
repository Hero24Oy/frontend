import { Slot } from 'expo-router';
import { FC } from 'react';
import { combineProviders } from 'react-combine-providers';

import { attachUiProviders } from '$ui-library';

const manager = combineProviders();

attachUiProviders(manager);

export const MasterProvider = manager.master();

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
