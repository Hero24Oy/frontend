import { gql } from '@apollo/client';

export const OFFER_EARNINGS_FRAGMENT = gql`
  fragment OfferEarningsFragment on OfferEarningsDto {
    status
    message
    updatedAt
  }
`;
