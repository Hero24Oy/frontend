import { gql } from '@apollo/client';

export type UserOffer = {
  offerId: string;
  offerRequestId: string;
};

export const USER_OFFER_FRAGMENT = gql`
  fragment UserOfferFragment on UserOfferDto {
    offerId
    offerRequestId
  }
`;
