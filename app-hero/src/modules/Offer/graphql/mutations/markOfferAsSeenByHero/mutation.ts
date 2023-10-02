import { gql } from '@apollo/client';

import { DEFAULT_RESPONSE_NAME, OfferIdInput } from '$common';

export type Response = boolean;

export type Variables = OfferIdInput;

// TODO change resolver from seller to hero
// * Would be better to combine two resolvers *-bySeller, *-byHero into one
export const MUTATION = gql`
  mutation MarkOfferAsSeenByHero($input: OfferIdInput!) {
    ${DEFAULT_RESPONSE_NAME}: markOfferAsSeenBySeller(input: $input)
  }
`;
