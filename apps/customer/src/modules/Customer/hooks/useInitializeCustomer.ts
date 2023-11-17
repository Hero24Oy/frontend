import { User } from 'firebase/auth';
import { useCallback, useState } from 'react';

import {
  handleAuthError,
  parseError,
  useWatchAuthChanges,
} from '@hero24/common';

import { CreateCustomerMutationVariables, GqlCustomerType } from '../graphql';

import { useCreateCustomer } from './useCreateCustomer';
import { useGetCustomer } from './useGetCustomer';

type UseInitializeCustomer = () => {
  isCustomerLoading: boolean;
};

export const useInitializeCustomer: UseInitializeCustomer = () => {
  const [isCustomerLoading, setIsCustomerLoading] = useState(true);

  const { getCustomer } = useGetCustomer({ skip: true });
  const { createCustomer } = useCreateCustomer();

  const onAuthChange = useCallback(async (firebaseUser: User | null) => {
    try {
      setIsCustomerLoading(true);

      if (!firebaseUser) {
        return;
      }

      const response = await getCustomer.refetch({ id: firebaseUser.uid });
      const customer = response.data.response;

      // * If user users the app first time, we need to create customer in the database
      if (customer) {
        return;
      }

      const initialCustomerData: CreateCustomerMutationVariables['data'] = {
        displayName: '',
        type: GqlCustomerType.INDIVIDUAL,
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
