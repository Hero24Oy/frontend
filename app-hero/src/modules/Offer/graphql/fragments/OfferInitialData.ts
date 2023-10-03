import { gql } from '@apollo/client';

import { Purchase, PURCHASE_FRAGMENT } from './Purchase';

import { Maybe } from '$common';

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
