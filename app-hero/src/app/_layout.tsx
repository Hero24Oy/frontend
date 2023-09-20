import { SplashScreen } from 'expo-router';

import { JsxElement, MasterProvider } from '$core';

SplashScreen.preventAutoHideAsync();

const Layout = (): JsxElement => {
  return <MasterProvider>{}</MasterProvider>;
};

export default Layout;
