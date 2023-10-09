import { SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';

interface UseInitializeAppReturnType {
  isAppInitialized: boolean;
}

const DELAY_TIME = 2000;

export const useInitializeApp = (): UseInitializeAppReturnType => {
  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);

  const initAppSuccessful = (): void => {
    SplashScreen.hideAsync();
    setIsAppInitialized(true);
  };

  useEffect(() => {
    const fetchInitData = async (): Promise<void> => {
      try {
        await pseudoAsyncFunction(DELAY_TIME);
        initAppSuccessful();
      } catch (e) {
        console.error(e);
        // TODO add some actions if init data isn't fetched successful
      }
    };

    void fetchInitData();
  }, [isAppInitialized]);

  // Fake fetch implementation. Remove after real fetch implementation
  const pseudoAsyncFunction = (delay: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  };
  // Fake fetch implementation. Remove after real fetch implementation

  return { isAppInitialized };
};
