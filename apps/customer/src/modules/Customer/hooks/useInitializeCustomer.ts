import { User } from 'firebase/auth';
import { useCallback, useState } from 'react';

import {
  CreateCustomerMutationVariables,
  handleAuthError,
  parseError,
  useWatchAuthChanges,
} from '@hero24/common';

import { useCreateCustomer, useLazyGetCustomer } from '../graphql';

type UseInitializeCustomer = () => {
  isCustomerLoading: boolean;
};

export const useInitializeCustomer: UseInitializeCustomer = () => {
  const [isCustomerLoading, setIsCustomerLoading] = useState(true);

  const { getCustomer } = useLazyGetCustomer();
  const { createCustomer } = useCreateCustomer();

  const onAuthChange = useCallback(async (firebaseUser: User | null) => {
    try {
      setIsCustomerLoading(true);

      if (!firebaseUser) {
        return;
      }

      const customer = await getCustomer.request({ id: firebaseUser.uid });

      // * If user users the app first time, we need to create customer in the database
      if (customer) {
        return;
      }

      const initialCustomerData: CreateCustomerMutationVariables['data'] = {
        displayName: '',
      };

      // * Type policy will handle storing user automatically
      await createCustomer.request({
        id: firebaseUser.uid,
        data: initialCustomerData,
      });
    } catch (error) {
      handleAuthError(parseError(error));
    } finally {
      setIsCustomerLoading(false);
    }
  }, []);

  useWatchAuthChanges({
    callback: onAuthChange,
  });

  return { isCustomerLoading };
};
