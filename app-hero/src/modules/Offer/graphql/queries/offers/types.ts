import {
  GraphQlPaginationArguments,
  OfferOrderColumn,
  OfferStatus,
  OfferUserRole,
} from '$common';

export type OfferFilter = {
  chatIds?: string[];
  ids?: string[];
  isApproved?: boolean;
  statuses?: OfferStatus[];
};

export type OffersInput = {
  role?: OfferUserRole;
} & GraphQlPaginationArguments<OfferFilter, OfferOrderColumn>;
