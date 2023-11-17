import {
  InferSelection,
  useCustomMutation,
  UseMutationWrapper,
} from '@hero24/common';

import {
  createEditCustomerMutation,
  EDIT_CUSTOMER_MUTATION_PREFIX,
  EditCustomerMutationVariables,
} from '../graphql';

const mutation = createEditCustomerMutation({
  data: {
    businessId: true,
    businessName: true,
    type: true,
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
