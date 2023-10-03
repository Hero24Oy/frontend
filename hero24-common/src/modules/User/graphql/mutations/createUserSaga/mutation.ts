import { gql } from '@apollo/client';

import { capitalize } from '../../../../../core';
import { User, USER_FRAGMENT, UserData } from '../../fragments';

export const PREFIX = 'createUser';

export type Response = {
  createUser: User;
};

export type Variables = {
  data: Omit<
    UserData,
    'createdAt' | 'updatedAt' | 'deletedAt' | 'lastAskedReviewTime'
  >;
  userId?: string;
};

export const MUTATION = gql`
  ${USER_FRAGMENT}

  mutation ${capitalize(PREFIX)}($data: UserDataInput!, $userId: String) {
    createUser(data: $data, userId: $userId) {
      ...UserFragment
    }
  }
`;
