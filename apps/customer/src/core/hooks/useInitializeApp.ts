import { useInitializeUser } from '@hero24/common';

type UseInitializeApp = () => {
  isAppInitialized: boolean;
};

export const useInitializeApp: UseInitializeApp = () => {
  const { isUserLoading } = useInitializeUser();

  // * Check that every initializer finished loading
  const isAppInitialized = [isUserLoading].every(
    (isItemLoaded) => !isItemLoaded,
  );

  return { isAppInitialized };
};
