import { gql } from '@apollo/client';

export const MUTATION = gql`
  mutation UnbindUserOfferRequests(
    $offerRequestIds: [String!]!
    $userId: String!
  ) {
    unbindUserOfferRequests(offerRequestIds: $offerRequestIds, userId: $userId)
  }
`;
