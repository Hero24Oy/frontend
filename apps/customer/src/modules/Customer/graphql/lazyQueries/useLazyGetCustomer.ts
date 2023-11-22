import {
  createCustomerQuery,
  CUSTOMER_QUERY_PREFIX,
  GetCustomerQueryVariables,
  InferSelection,
  useCustomLazyQuery,
  UseLazyQueryWrapper,
} from '@hero24/common';

const query = createCustomerQuery({
  id: true,
  data: {
    displayName: true,
    type: true,
    businessId: true,
  },
});

export type LazyGetCustomerResponse = InferSelection<typeof query>;

export type UseLazyGetCustomer = UseLazyQueryWrapper<
  typeof CUSTOMER_QUERY_PREFIX,
  LazyGetCustomerResponse,
  GetCustomerQueryVariables
>;

export const useLazyGetCustomer: UseLazyGetCustomer = (...args) =>
  useCustomLazyQuery(CUSTOMER_QUERY_PREFIX, query, ...args);
