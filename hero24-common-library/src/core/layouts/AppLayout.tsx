import { UiLibraryProvider } from '$ui-library';
import { Slot, SplashScreen } from 'expo-router';
import { useInitializeApp } from '$common/hooks';
import { FC } from 'react';

SplashScreen.preventAutoHideAsync();

export const AppLayout: FC = () => {
  const { isAppInitialized } = useInitializeApp();

  return isAppInitialized ? (
    <UiLibraryProvider>
      <Slot />
    </UiLibraryProvider>
  ) : null;
};
