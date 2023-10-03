import { gql } from '@apollo/client';

import { PURCHASE_FRAGMENT } from './Purchase';

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
