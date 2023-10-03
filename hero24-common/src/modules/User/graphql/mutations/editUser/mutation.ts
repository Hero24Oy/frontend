import { gql } from '@apollo/client';

import { capitalize, DEFAULT_RESPONSE_NAME } from '../../../../../core';
import { User, USER_FRAGMENT, UserData } from '../../fragments';

export const PREFIX = 'editUser';

export type Data = {
  editUserData: User;
};

export type Variables = {
  data: Omit<Partial<UserData>, 'createdAt' | 'updatedAt' | 'deletedAt'>;
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
