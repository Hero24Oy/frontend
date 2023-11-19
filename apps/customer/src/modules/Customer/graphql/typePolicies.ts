import { FieldFunctionOptions, TypePolicies } from '@apollo/client';

import { CUSTOMER_TYPE_NAME } from './constants';
import { EditCustomerMutationVariables } from './mutations';
import { CustomerQueryVariables } from './queries';
import { CustomerProfile } from './types';

export const customerTypePolicies: TypePolicies = {
  Query: {
    fields: {
      buyer: {
        keyArgs: false,
        read: (
          _cachedKey,
          options: FieldFunctionOptions<Partial<CustomerQueryVariables>>,
        ) => {
          const { args, toReference } = options;

          return toReference({
            __typename: CUSTOMER_TYPE_NAME,
            id: args?.id,
          });
        },
      },
    },
  },
  Mutation: {
    fields: {
      editBuyer: {
        keyArgs: false,
        merge: (
          _existing,
          updatedCustomer,
          { toReference, mergeObjects, args },
        ) => {
          const { id } = args as EditCustomerMutationVariables;

          const cachedCustomer = toReference({
            __typename: CUSTOMER_TYPE_NAME,
            id,
          });

          return mergeObjects(
            cachedCustomer,
            updatedCustomer,
          ) as CustomerProfile;
        },
      },
    },
  },
};
