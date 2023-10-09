import { SplashScreen } from 'expo-router';
import { FC } from 'react';

import { MainLayout } from '$common';

SplashScreen.preventAutoHideAsync();

const Layout: FC = () => {
  return <MainLayout />;
};

export default Layout;
