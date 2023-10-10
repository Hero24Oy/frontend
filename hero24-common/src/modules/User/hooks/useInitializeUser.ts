import { useState } from 'react';

import { useWatchAuthChanges } from '../../Auth/hooks';
import { useGetUser } from '../graphql';

type UseInitializeUser = () => {
  isUserLoaded: boolean;
};

export const useInitializeUser: UseInitializeUser = () => {
  const [isUserLoaded, setIsUserLoaded] = useState(true);

  const { getUser } = useGetUser({ skip: true });

  useWatchAuthChanges({
    callback: (newState) => {
      const callback = async (): Promise<void> => {
        setIsUserLoaded(true);

        if (!newState) {
          setIsUserLoaded(false);

          return;
        }

        // TODO use lazy query when it's available
        await getUser.refetch({ id: newState.uid });
      };

      callback()
        .then(() => setIsUserLoaded(false))
        .catch((error) => console.error(error));
    },
  });

  return { isUserLoaded };
};
