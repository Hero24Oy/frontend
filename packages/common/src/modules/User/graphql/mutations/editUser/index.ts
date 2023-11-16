import { DocumentNode, gql } from '@apollo/client';

import { User, UserData } from '../../fragments';

import { capitalize, createGraphqlBuilder, DEFAULT_RESPONSE_NAME } from '$core';

export const EDIT_USER_PREFIX = 'editUser';

export type Data = User;

export type PartialUserDataInput = Omit<
  Partial<UserData>,
  'createdAt' | 'updatedAt' | 'deletedAt'
>;

export type EditUserMutationVariables = {
  data: PartialUserDataInput;
  userId: string;
};

export const createEditUserMutation = createGraphqlBuilder<Data, DocumentNode>(
  (selection) =>
    gql`

  mutation ${capitalize(
    EDIT_USER_PREFIX,
  )}($data: PartialUserDataInput!, $userId: String!) {
    ${DEFAULT_RESPONSE_NAME}: editUserData(data: $data, userId: $userId) {
      ${selection}
    }
  }
`,
);
