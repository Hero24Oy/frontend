import { useState } from 'react';

import { getCurrentLanguage } from '../../../core';
import { useWatchAuthChanges } from '../../Auth/hooks';
import { useCreateUser, useGetUser, UserDataInput } from '../graphql';

type UseInitializeUser = () => {
  isUserLoaded: boolean;
};

export const useInitializeUser: UseInitializeUser = () => {
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  const { getUser } = useGetUser({ skip: true });
  const { createUser } = useCreateUser();

  useWatchAuthChanges({
    callback: (firebaseUser) => {
      const callback = async (): Promise<void> => {
        setIsUserLoaded(false);

        if (!firebaseUser) {
          return;
        }

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
      };

      callback()
        .then(() => setIsUserLoaded(true))
        .catch((error) => console.error(error));
    },
  });

  return { isUserLoaded };
};
