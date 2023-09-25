import { SplashScreen } from 'expo-router';
import { FC } from 'react';

import { MasterProvider } from '$core';

SplashScreen.preventAutoHideAsync();

const Layout: FC = () => {
  return <MasterProvider>{}</MasterProvider>;
};

export default Layout;
