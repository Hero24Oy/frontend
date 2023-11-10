import { gql } from '@apollo/client';

import { capitalize, DEFAULT_RESPONSE_NAME } from '$core';

export const PREFIX = 'unbindUserOfferRequests';

export type Data = boolean;

export type Variables = {
  offerRequestIds: string[];
  userId: string;
};

export const MUTATION = gql`
  mutation ${capitalize(PREFIX)}(
    $offerRequestIds: [String!]!
    $userId: String!
  ) {
    ${DEFAULT_RESPONSE_NAME}: unbindUserOfferRequests(offerRequestIds: $offerRequestIds, userId: $userId)
  }
`;
