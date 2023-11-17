import { DocumentNode, gql } from '@apollo/client';

import {
  capitalize,
  createGraphqlBuilder,
  DEFAULT_RESPONSE_NAME,
} from '@hero24/common';

import { CustomerProfile } from '../../types';

export type Data = CustomerProfile;

export type CustomerQueryVariables = {
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
