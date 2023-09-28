import { gql } from '@apollo/client';

import { Maybe } from 'components/types';

import { Purchase, PURCHASE_FRAGMENT } from './Purchase';

export type OfferInitialData = {
  agreedStartTime: Date;
  buyerProfileId: string;
  createdAt: Date;
  offerRequestId: string;
  pricePerHour: number;
  purchase: Purchase;
  sellerProfileId: string;
  categoryId?: Maybe<string>;
};

export const OFFER_INITIAL_DATA_FRAGMENT = gql`
  ${PURCHASE_FRAGMENT}

  fragment OfferInitialData on OfferInitialDataDto {
    createdAt
    buyerProfileId
    sellerProfileId
    offerRequestId
    agreedStartTime
    categoryId
    purchase {
      ...PurchaseInfo
    }
    pricePerHour
  }
`;
