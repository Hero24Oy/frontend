import { DocumentNode, gql } from '@apollo/client';

import { User, UserData } from '../../fragments';

import { capitalize, createGraphqlBuilder, DEFAULT_RESPONSE_NAME } from '$core';

export const EDIT_USER_PREFIX = 'editUser';

export type EditUserResponse = User;

export type PartialUserDataInput = Omit<
  Partial<UserData>,
  'createdAt' | 'updatedAt' | 'deletedAt'
>;

export type EditUserVariables = {
  data: PartialUserDataInput;
  userId: string;
};

export const createEditUserMutation = createGraphqlBuilder<
  EditUserResponse,
  DocumentNode
>(
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
