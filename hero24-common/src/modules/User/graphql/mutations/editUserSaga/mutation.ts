import { gql } from '@apollo/client';

import { USER_FRAGMENT } from '../../fragments';

const MUTATION = gql`
  ${USER_FRAGMENT}

  mutation EditUser($data: PartialUserDataInput!, $userId: String!) {
    editUserData(data: $data, userId: $userId) {
      ...UserInfo
    }
  }
`;

export default MUTATION;
