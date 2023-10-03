import { gql } from '@apollo/client';
import { EARNINGS_STATUS } from 'hero24-types';

import { Maybe } from '$common';

export type OfferEarnings = {
  status: EARNINGS_STATUS;
  updatedAt: Date;
  message?: Maybe<string>;
};

export const OFFER_EARNINGS_FRAGMENT = gql`
  fragment OfferEarningsInfo on OfferEarningsDto {
    status
    message
    updatedAt
  }
`;
