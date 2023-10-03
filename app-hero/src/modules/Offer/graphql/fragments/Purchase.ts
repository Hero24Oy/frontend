import { gql } from '@apollo/client';

export const PURCHASE_FRAGMENT = gql`
  fragment PurchaseInfo on PurchaseDto {
    createdAt
    duration
    pricePerHour
    reason
  }
`;
