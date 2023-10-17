import { FieldFunctionOptions, TypePolicies } from '@apollo/client';

import { USER_TYPE_NAME } from './constants';

export const userTypePolicies: TypePolicies = {
  Query: {
    fields: {
      user: {
        keyArgs: false,
        read: (
          _cachedKey,
          options: FieldFunctionOptions<Partial<{ id: string }>>,
        ) => {
          const { args, toReference } = options;

          return toReference({
            __typename: USER_TYPE_NAME,
            id: args?.id,
          });
        },
      },
    },
  },
};
