import { useInitializeUser } from 'modules/User';

type UseInitializeApp = () => {
  isAppInitialized: boolean;
};

export const useInitializeApp: UseInitializeApp = () => {
  const { isUserLoading } = useInitializeUser();

  // * Check that every initializer finished loading
  // TODO implement better logic for handling loading, for now is user loading is failed, this hook will return true
  const isAppInitialized = [isUserLoading].every(
    (isItemLoaded) => !isItemLoaded,
  );

  return { isAppInitialized };
};
