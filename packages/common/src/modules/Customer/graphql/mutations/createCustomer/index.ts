import { DocumentNode, gql } from '@apollo/client';

import { GqlCustomerType } from '../../constants';
import { CustomerProfile, CustomerProfileData } from '../../types';

import { capitalize, createGraphqlBuilder, DEFAULT_RESPONSE_NAME } from '$core';

type Data = CustomerProfile;

type CreateCustomerData = Omit<CustomerProfileData, 'type'> & {
  type?: `${GqlCustomerType}`;
};

export type CreateCustomerMutationVariables = {
  data: CreateCustomerData;
  id: string;
};

export const CREATE_CUSTOMER_MUTATION_PREFIX = 'createCustomer';

export const createCreateCustomerMutation = createGraphqlBuilder<
  Data,
  DocumentNode
>(
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
