import { gql } from '@apollo/client';

export const OFFER_EARNINGS_FRAGMENT = gql`
  fragment OfferEarningsInfo on OfferEarningsDto {
    status
    message
    updatedAt
  }
`;
