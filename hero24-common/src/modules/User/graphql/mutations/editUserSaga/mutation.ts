import { gql } from '@apollo/client';

import { capitalize } from '../../../../../core';
import { User, USER_FRAGMENT, UserData } from '../../fragments';

export const PREFIX = 'editUser';

export type Response = {
  editUserData: User;
};

export type Variables = {
  data: Omit<Partial<UserData>, 'createdAt' | 'updatedAt' | 'deletedAt'>;
  userId: string;
};

const MUTATION = gql`
  ${USER_FRAGMENT}

  mutation ${capitalize(
    PREFIX,
  )}($data: PartialUserDataInput!, $userId: String!) {
    editUserData(data: $data, userId: $userId) {
      ...UserFragment
    }
  }
`;

export default MUTATION;
