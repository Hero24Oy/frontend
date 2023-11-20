import {
  InferSelection,
  useCustomQuery,
  UseQueryWrapper,
} from '@hero24/common';

import {
  createCustomerQuery,
  CUSTOMER_QUERY_PREFIX,
  CustomerQueryVariables,
} from '../graphql';

const query = createCustomerQuery({
  id: true,
  data: {
    displayName: true,
    photoURL: true,
    type: true,
    businessId: true,
  },
});

export type GetCustomerResponse = InferSelection<typeof query>;

export type UseGetCustomer = UseQueryWrapper<
  typeof CUSTOMER_QUERY_PREFIX,
  GetCustomerResponse,
  CustomerQueryVariables,
  true
>;

export const useGetCustomer: UseGetCustomer = (...args) =>
  useCustomQuery(
    CUSTOMER_QUERY_PREFIX,
    query,
    ...args,
  ) as ReturnType<UseGetCustomer>;
