import { SplashScreen } from 'expo-router';

export const useHideSplashScreen = (isAppInitialized: boolean): void => {
  if (isAppInitialized) {
    SplashScreen.hideAsync();
  }
};
