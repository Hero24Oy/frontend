import { gql } from '@apollo/client';

import { capitalize } from '../../../../../core';

export const PREFIX = 'unbindUserOfferRequests';

export type Response = {
  unbindUserOfferRequests: boolean;
};

export type Variables = {
  offerRequestIds: string[];
  userId: string;
};

export const MUTATION = gql`
  mutation ${capitalize(PREFIX)}(
    $offerRequestIds: [String!]!
    $userId: String!
  ) {
    unbindUserOfferRequests(offerRequestIds: $offerRequestIds, userId: $userId)
  }
`;
