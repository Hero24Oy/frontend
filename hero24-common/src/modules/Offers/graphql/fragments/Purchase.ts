import { gql } from '@apollo/client';

import { Maybe } from 'components/types';

export type Purchase = {
  createdAt: Date;
  duration: number;
  pricePerHour: number;
  reason?: Maybe<string>;
};

export const PURCHASE_FRAGMENT = gql`
  fragment PurchaseInfo on PurchaseDto {
    createdAt
    duration
    pricePerHour
    reason
  }
`;
