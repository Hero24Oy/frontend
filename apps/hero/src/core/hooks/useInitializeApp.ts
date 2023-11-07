import { useInitializeUser, useLoadFonts } from '@hero24/common';

type UseInitializeApp = () => {
  areFontsLoaded: boolean;
  isAppInitialized: boolean;
};

export const useInitializeApp: UseInitializeApp = () => {
  const { isUserLoading } = useInitializeUser();
  const { areFontsLoaded } = useLoadFonts();

  // * Check that every initializer finished loading
  const isAppInitialized = [isUserLoading].every(
    (isItemLoaded) => !isItemLoaded,
  );

  return { isAppInitialized, areFontsLoaded };
};
