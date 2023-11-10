import { gql } from '@apollo/client';

import { User, USER_FRAGMENT } from '../../fragments';

import { capitalize, DEFAULT_RESPONSE_NAME, GraphQlPagination } from '$core';

export const PREFIX = 'users';

export type Data = GraphQlPagination<User>;

// TODO move to using object instead of list of arguments
export type Variables = {
  limit?: number;
  offset?: number;
  search?: string;
};

export const QUERY = gql`
  ${USER_FRAGMENT}

  query ${capitalize(PREFIX)}($limit: Int, $offset: Int, $search: String) {
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
