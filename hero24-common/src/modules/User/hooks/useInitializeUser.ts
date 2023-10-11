import { useState } from 'react';

import { getCurrentLanguage } from '../../../core';
import { useWatchAuthChanges } from '../../Auth/hooks';
import { useCreateUser, useGetUser, UserDataInput } from '../graphql';

type UseInitializeUser = () => {
  isUserLoading: boolean;
};

export const useInitializeUser: UseInitializeUser = () => {
  const [isUserLoading, setIsUserLoading] = useState(true);

  const { getUser } = useGetUser({ skip: true });
  const { createUser } = useCreateUser();

  useWatchAuthChanges({
    // eslint-disable-next-line @typescript-eslint/no-misused-promises -- We can pass async here
    callback: async (firebaseUser) => {
      setIsUserLoading(true);

      if (!firebaseUser) {
        setIsUserLoading(false);

        return;
      }

      try {
        // TODO use lazy query when it's available
        const response = await getUser.refetch({ id: firebaseUser.uid });
        const user = response.data.response;

        // * If user users the app first time, we need to create it in the database
        if (user) {
          return;
        }

        const initialUserData: UserDataInput = {
          photoURL: firebaseUser.photoURL || '',
          emailVerified: firebaseUser.emailVerified,
          email: firebaseUser.email || '',
          name: firebaseUser.displayName || '',
          language: getCurrentLanguage(),
          phone: '',
        };

        // * Type policy will handle storing user automatically
        await createUser.request({
          userId: firebaseUser.uid,
          data: initialUserData,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsUserLoading(false);
      }
    },
  });

  return { isUserLoading };
};
