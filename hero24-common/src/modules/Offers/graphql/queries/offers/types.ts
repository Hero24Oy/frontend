import { GraphQlPaginationArguments } from '../../../../../core';
import {
  OfferOrderColumn,
  OfferStatusInput,
  OfferUserRole,
} from '../../constants';

export type OfferFilter = {
  chatIds?: string[];
  ids?: string[];
  isApproved?: boolean;
  statuses?: OfferStatusInput[];
};

export type OffersInput = GraphQlPaginationArguments<
  OfferFilter,
  OfferOrderColumn
> & {
  role?: OfferUserRole;
};
