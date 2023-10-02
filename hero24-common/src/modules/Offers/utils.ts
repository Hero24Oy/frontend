import { OFFER_STATUS } from 'hero24-types';

import { GraphQLOfferStatus } from './graphql/constants';

export const getOfferStatus = (status: OFFER_STATUS): GraphQLOfferStatus =>
  GraphQLOfferStatus[status.toUpperCase() as keyof typeof GraphQLOfferStatus];
