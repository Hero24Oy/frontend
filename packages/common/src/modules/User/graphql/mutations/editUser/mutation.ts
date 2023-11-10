import { gql } from '@apollo/client';

import { User, USER_FRAGMENT, UserData } from '../../fragments';

import { capitalize, DEFAULT_RESPONSE_NAME } from '$core';

export const PREFIX = 'editUser';

export type Data = User;

export type PartialUserDataInput = Omit<
  Partial<UserData>,
  'createdAt' | 'updatedAt' | 'deletedAt'
>;

export type Variables = {
  data: PartialUserDataInput;
  userId: string;
};

export const MUTATION = gql`
  ${USER_FRAGMENT}

  mutation ${capitalize(
    PREFIX,
  )}($data: PartialUserDataInput!, $userId: String!) {
    ${DEFAULT_RESPONSE_NAME}: editUserData(data: $data, userId: $userId) {
      ...UserFragment
    }
  }
`;
