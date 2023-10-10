import { SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';

interface UseInitializeAppReturnType {
  isAppInitialized: boolean;
}

export const useInitializeApp = (): UseInitializeAppReturnType => {
  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);

  const initAppSuccessful = (): void => {
    SplashScreen.hideAsync();
    setIsAppInitialized(true);
  };

  //@ts-ignore @typescript-eslint/require-await
  const fetchInitData = async (): Promise<void> => {
    try {
      // TODO add async requests here, that required for app initialize
      initAppSuccessful();
    } catch (e) {
      console.error(e);
      // TODO add some actions if init data isn't fetched successful
    }
  };

  useEffect(() => {
    void fetchInitData();
  }, [isAppInitialized]);

  return { isAppInitialized };
};
