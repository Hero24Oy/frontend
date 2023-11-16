import { FieldFunctionOptions, TypePolicies } from '@apollo/client';

import { USER_TYPE_NAME } from './constants';
import { User } from './fragments';
import { EditUserMutationVariables } from './mutations';

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
  Mutation: {
    fields: {
      editUserData: {
        keyArgs: false,
        merge: (_existing, incoming, { toReference, mergeObjects, args }) => {
          const { userId } = args as Pick<EditUserMutationVariables, 'userId'>;

          const cachedUser = toReference({
            __typename: USER_TYPE_NAME,
            id: userId,
          });

          return mergeObjects(cachedUser, incoming) as User;
        },
      },
    },
  },
};
