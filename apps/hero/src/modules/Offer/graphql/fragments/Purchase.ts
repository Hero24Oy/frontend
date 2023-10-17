import { gql } from '@apollo/client';

export const PURCHASE_FRAGMENT = gql`
  fragment PurchaseFragment on PurchaseDto {
    createdAt
    duration
    pricePerHour
    reason
  }
`;
