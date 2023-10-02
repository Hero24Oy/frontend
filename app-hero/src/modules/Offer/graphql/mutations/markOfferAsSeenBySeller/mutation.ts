import { gql } from '@apollo/client';

import { capitalize, DEFAULT_RESPONSE_NAME, OfferIdInput } from '$common';

export const PREFIX = 'markOfferAsSeenBySeller';

export type Response = boolean;

export type Variables = OfferIdInput;

// * Would be better to combine two resolvers *-bySeller, *-byHero into one
export const MUTATION = gql`
  mutation ${capitalize(PREFIX)}($input: OfferIdInput!) {
    ${DEFAULT_RESPONSE_NAME}: markOfferAsSeenBySeller(input: $input)
  }
`;
