import { DocumentNode, gql } from '@apollo/client';

import { Settings } from '../../types';

import { createGraphqlBuilder, DEFAULT_RESPONSE_NAME } from '$core';

export const createSettingsQuery = createGraphqlBuilder<Settings, DocumentNode>(
  (selection) =>
    gql`
    query Settings {
      ${DEFAULT_RESPONSE_NAME}: settings {
        ${selection}
      }
    }
  `,
);
