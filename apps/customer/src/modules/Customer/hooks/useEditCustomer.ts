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

// TODO handle merge problem where nested data like BuyerProfileDataDto does not have id, so apollo does not know which object to merge
//* Solutions
// * 1. Provide customer merge function for those fields
// * 2. Provide id for nested fields (virtual fields?)
const mutation = createEditCustomerMutation({
  id: true,
  data: {
    displayName: true,
    photoURL: true,
    type: true,
    businessId: true,
    businessName: true,
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
