import {
  createEditCustomerMutation,
  EDIT_CUSTOMER_MUTATION_PREFIX,
  EditCustomerMutationVariables,
  InferSelection,
  useCustomMutation,
  UseMutationWrapper,
} from '@hero24/common';

const mutation = createEditCustomerMutation({
  id: true,
  data: {
    displayName: true,
    type: true,
    businessId: true,
  },
});

export type EditCustomerResponse = InferSelection<typeof mutation>;

export type UseEditCustomer = UseMutationWrapper<
  typeof EDIT_CUSTOMER_MUTATION_PREFIX,
  EditCustomerResponse,
  EditCustomerMutationVariables
>;

export const useEditCustomer: UseEditCustomer = (...args) =>
  useCustomMutation(EDIT_CUSTOMER_MUTATION_PREFIX, mutation, ...args);
