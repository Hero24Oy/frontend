import { gql } from '@apollo/client';

import { DEFAULT_RESPONSE_NAME, GraphQlPagination } from '../../../../../core';
import { User, USER_FRAGMENT } from '../../fragments';

export const PREFIX = 'users';

export type Data = GraphQlPagination<User>;

// TODO GraphqlPaginationArguments could be used here
export type Variables = {
  limit?: number;
  offset?: number;
  search?: string;
};

export const QUERY = gql`
  ${USER_FRAGMENT}

  query GetUsers($limit: Int, $offset: Int, $search: String) {
    ${DEFAULT_RESPONSE_NAME}: users(limit: $limit, offset: $offset, search: $search) {
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
