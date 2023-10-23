import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';

export const useHideSplashScreen = (isAppInitialized: boolean): void => {
  useEffect(() => {
    if (isAppInitialized) {
      SplashScreen.hideAsync();
    }
  }, [isAppInitialized]);
};
