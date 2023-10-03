import { gql } from '@apollo/client';

import { capitalize, DEFAULT_RESPONSE_NAME } from '../../../../../core';
import { User, USER_FRAGMENT, UserData } from '../../fragments';

export const PREFIX = 'createUser';

export type Data = {
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
    ${DEFAULT_RESPONSE_NAME}: createUser(data: $data, userId: $userId) {
      ...UserFragment
    }
  }
`;
