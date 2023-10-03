import { gql } from '@apollo/client';

import { USER_FRAGMENT } from '../../fragments';

export const QUERY = gql`
  ${USER_FRAGMENT}

  query GetUsers($limit: Int, $offset: Int, $search: String) {
    users(limit: $limit, offset: $offset, search: $search) {
      total
      hasNextPage
      endCursor
      edges {
        cursor
        node {
          ...UserFragment
        }
      }
    }
  }
`;
