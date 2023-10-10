import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';

export const useHideSplashScreen = (isAppInitialized: boolean): void => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, [isAppInitialized]);
};
