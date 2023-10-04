import { gql } from '@apollo/client';

import { USER_FRAGMENT } from '../../fragments';

const MUTATION = gql`
  ${USER_FRAGMENT}

  mutation CreateUser($data: UserDataInput!, $userId: String) {
    createUser(data: $data, userId: $userId) {
      ...UserInfo
    }
  }
`;

export default MUTATION;
