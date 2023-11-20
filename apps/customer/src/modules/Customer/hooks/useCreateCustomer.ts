import {
  CREATE_CUSTOMER_MUTATION_PREFIX,
  createCustomerMutation,
  CreateCustomerMutationVariables,
  InferSelection,
  useCustomMutation,
  UseMutationWrapper,
} from '@hero24/common';

const mutation = createCustomerMutation({
  id: true,
  data: {
    displayName: true,
    type: true,
    businessId: true,
  },
});

export type CreateCustomerResponse = InferSelection<typeof mutation>;

export type UseCreateCustomer = UseMutationWrapper<
  typeof CREATE_CUSTOMER_MUTATION_PREFIX,
  CreateCustomerResponse,
  CreateCustomerMutationVariables
>;

export const useCreateCustomer: UseCreateCustomer = (...args) =>
  useCustomMutation(CREATE_CUSTOMER_MUTATION_PREFIX, mutation, ...args);
