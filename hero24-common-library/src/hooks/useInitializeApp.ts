import { useState } from 'react';

interface UseInitializeAppReturnType {
  isAppInitialized: boolean;
}

export const useInitializeApp = (): UseInitializeAppReturnType => {
  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);

  if (isAppInitialized) {
    return { isAppInitialized };
  }

  // Fake fetch implementation. Remove after real fetch implementation
  const delayTime = 2000;

  const pseudoAsyncFunction = (delay: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  };

  pseudoAsyncFunction(delayTime)
    .then(() => setIsAppInitialized(true))
    .catch(() => null);
  // Fake fetch implementation. Remove after real fetch implementation

  return { isAppInitialized };
};
