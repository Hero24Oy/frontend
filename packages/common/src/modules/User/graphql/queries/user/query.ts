import { DocumentNode, gql } from '@apollo/client';

import { User } from '../../fragments';

import { capitalize, createGraphqlBuilder, DEFAULT_RESPONSE_NAME } from '$core';

export const USER_QUERY_PREFIX = 'user';

export type Data = User;

export type Variables = {
  id: string;
};

export const createUserQuery = createGraphqlBuilder<Data, DocumentNode>(
  (selection) =>
    gql`

  query ${capitalize(USER_QUERY_PREFIX)}($id: String!) {
    ${DEFAULT_RESPONSE_NAME}: user(id: $id) {
      ${selection}
    }
  }
`,
);
