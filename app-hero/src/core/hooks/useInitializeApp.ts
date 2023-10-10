import { useInitializeUser } from '$common';

type UseInitializeApp = () => {
  isAppInitialized: boolean;
};

export const useInitializeApp: UseInitializeApp = () => {
  const { isUserLoaded } = useInitializeUser();

  const isAppInitialized = [isUserLoaded].every((isItemLoaded) => isItemLoaded);

  return { isAppInitialized };
};
