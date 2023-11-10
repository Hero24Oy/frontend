import { gql } from '@apollo/client';

import { User, USER_FRAGMENT, UserData } from '../../fragments';

import { capitalize, DEFAULT_RESPONSE_NAME } from '$core';

export const PREFIX = 'createUser';

export type Data = User;

export type UserDataInput = Omit<
  UserData,
  'createdAt' | 'updatedAt' | 'deletedAt' | 'lastAskedReviewTime'
>;

export type Variables = {
  data: UserDataInput;
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
