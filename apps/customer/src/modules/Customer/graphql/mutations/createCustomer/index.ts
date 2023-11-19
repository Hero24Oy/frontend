import { DocumentNode, gql } from '@apollo/client';

import {
  capitalize,
  createGraphqlBuilder,
  DEFAULT_RESPONSE_NAME,
} from '@hero24/common';

import { GqlCustomerType } from '../../constants';
import { CustomerProfile, CustomerProfileData } from '../../types';

type Data = CustomerProfile;

type CreateCustomerData = Omit<CustomerProfileData, 'type'> & {
  type: `${GqlCustomerType}`;
};

export type CreateCustomerMutationVariables = {
  data: CreateCustomerData;
  id: string;
};

export const CREATE_CUSTOMER_MUTATION_PREFIX = 'createCustomer';

export const createCustomerMutation = createGraphqlBuilder<Data, DocumentNode>(
  (selection) => gql`
    mutation ${capitalize(
      CREATE_CUSTOMER_MUTATION_PREFIX,
    )} ($id: String!, $data: BuyerProfileDataInput!) {
      ${DEFAULT_RESPONSE_NAME}: createBuyer(id: $id, data: $data) {
        ${selection}
      }
    }
  `,
);
