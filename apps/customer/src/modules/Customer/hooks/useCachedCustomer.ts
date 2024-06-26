import { useFirebaseUser } from '@hero24/common';

import { GetCustomerResponse, useGetCustomer } from '../graphql';

type UseCachedGqlCustomer = () => {
  customer: GetCustomerResponse;
};

// * We should use it only when authenticated
export const useCachedGqlCustomer: UseCachedGqlCustomer = () => {
  const { user } = useFirebaseUser();

  const { getCustomer } = useGetCustomer({
    variables: {
      id: user?.uid || '',
    },
  });

  return { customer: getCustomer.data };
};
