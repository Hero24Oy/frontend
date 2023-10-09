import { useState } from 'react';

import { useWatchAuthChanges } from './useWatchAuthChanged';

import { useGetUser } from '$common';

type UseInitializeApp = () => {
  isLoading: boolean;
};

export const useInitializeApp: UseInitializeApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { getUser } = useGetUser({ skip: true });

  useWatchAuthChanges({
    callback: (newState) => {
      const callback = async (): Promise<void> => {
        setIsLoading(true);

        if (!newState) {
          setIsLoading(false);

          return;
        }

        // TODO use lazy query when it's available
        await getUser.refetch({ id: newState.uid });
      };

      callback()
        .then(() => setIsLoading(false))
        .catch((error) => console.error(error));
    },
  });

  return { isLoading };
};
