import {
  createCustomerQuery,
  CUSTOMER_QUERY_PREFIX,
  GetCustomerQueryVariables,
  InferSelection,
  useCustomQuery,
  UseQueryWrapper,
} from '@hero24/common';

const query = createCustomerQuery({
  id: true,
  data: {
    displayName: true,
    type: true,
    businessId: true,
  },
});

export type GetCustomerResponse = InferSelection<typeof query>;

export type UseGetCustomer = UseQueryWrapper<
  typeof CUSTOMER_QUERY_PREFIX,
  GetCustomerResponse,
  GetCustomerQueryVariables,
  true
>;

export const useGetCustomer: UseGetCustomer = (...args) =>
  useCustomQuery(
    CUSTOMER_QUERY_PREFIX,
    query,
    ...args,
  ) as ReturnType<UseGetCustomer>;
