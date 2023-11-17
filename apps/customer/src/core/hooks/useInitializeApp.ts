import { useInitializeUser } from '@hero24/common';

import { useInitializeCustomer } from '$modules';

type UseInitializeApp = () => {
  isAppInitialized: boolean;
};

export const useInitializeApp: UseInitializeApp = () => {
  const { isUserLoading } = useInitializeUser();
  const { isCustomerLoading } = useInitializeCustomer();

  // * Check that every initializer finished loading
  const isAppInitialized = [isUserLoading, isCustomerLoading].every(
    (isItemLoaded) => !isItemLoaded,
  );

  return { isAppInitialized };
};
