import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';

import { useInitializeUser, useLoadFonts } from '@hero24/common';

type UseInitializeApp = () => {
  isAppInitialized: boolean;
};

export const useMainProviderLogic: UseInitializeApp = () => {
  const { isUserLoading } = useInitializeUser();
  const { areFontsLoaded } = useLoadFonts();

  const appLoadChecks = [isUserLoading, !areFontsLoaded];

  // * Check that every initializer finished loading
  const isAppInitialized = appLoadChecks.every((isItemLoaded) => !isItemLoaded);

  useEffect(() => {
    if (!isAppInitialized) {
      return;
    }

    SplashScreen.hideAsync();
  }, [isAppInitialized]);

  return { isAppInitialized };
};
