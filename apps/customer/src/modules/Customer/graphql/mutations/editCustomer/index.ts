import { DocumentNode, gql } from '@apollo/client';

import {
  capitalize,
  createGraphqlBuilder,
  DEFAULT_RESPONSE_NAME,
} from '@hero24/common';

import { CustomerProfile, CustomerProfileData } from '../../types';
import { GqlCustomerType } from '../createCustomer';

type Data = CustomerProfile;

type EditCustomerData = Partial<
  Omit<CustomerProfileData, 'type'> & {
    type: `${GqlCustomerType}`;
  }
>;

export type EditCustomerMutationVariables = {
  data: EditCustomerData;
  id: string;
};

export const EDIT_CUSTOMER_MUTATION_PREFIX = 'editCustomer';

export const createEditCustomerMutation = createGraphqlBuilder<
  Data,
  DocumentNode
>(
  (selection) => gql`
    mutation ${capitalize(
      EDIT_CUSTOMER_MUTATION_PREFIX,
    )} ($id: String!, $data: PartialBuyerProfileDataInput!) {
      ${DEFAULT_RESPONSE_NAME}: editBuyer(id: $id, data: $data) {
        ${selection}
      }
    }
  `,
);
