import { DocumentNode, gql } from '@apollo/client';

import { CustomerProfile } from '../../types';

import { capitalize, createGraphqlBuilder, DEFAULT_RESPONSE_NAME } from '$core';

export type Data = CustomerProfile;

export type GetCustomerQueryVariables = {
  id: string;
};

export const CUSTOMER_QUERY_PREFIX = 'customer';

export const createCustomerQuery = createGraphqlBuilder<Data, DocumentNode>(
  (selection) => gql`
    query ${capitalize(CUSTOMER_QUERY_PREFIX)}($id: String!) {
      ${DEFAULT_RESPONSE_NAME}: buyer(id: $id) {
        ${selection}
      }
    }
  `,
);
