import { GraphQlPaginationArguments } from '../../../../../core';
import {
  GraphQLOfferStatus,
  OfferOrderColumn,
  OfferUserRole,
} from '../../constants';

export type OfferFilter = {
  chatIds?: string[];
  ids?: string[];
  isApproved?: boolean;
  statuses?: GraphQLOfferStatus[];
};

export type OffersInput = GraphQlPaginationArguments<
  OfferFilter,
  OfferOrderColumn
> & {
  role?: OfferUserRole;
};
