import { gql } from '@apollo/client';

import { USER_FRAGMENT } from '../../fragments';

export const QUERY = gql`
  ${USER_FRAGMENT}

  query GetUser($id: String!) {
    user(id: $id) {
      ...UserFragment
    }
  }
`;
