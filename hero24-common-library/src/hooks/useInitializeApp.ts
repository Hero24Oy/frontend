import { useEffect, useState } from 'react';

interface UseInitializeAppReturnType {
  isAppInitialized: boolean;
}

export const useInitializeApp = (): UseInitializeAppReturnType => {
  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);

  const fetchInitData = (): void => {
    try {
      // TODO add any requests here, that required for app initialize
      setIsAppInitialized(true);
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
