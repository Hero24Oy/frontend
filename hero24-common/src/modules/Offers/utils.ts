import { OFFER_STATUS } from 'hero24-types';

import { OfferStatusInput } from './graphql/constants';

export const getOfferStatus = (status: OFFER_STATUS): OfferStatusInput =>
  OfferStatusInput[status.toUpperCase() as keyof typeof OfferStatusInput];
