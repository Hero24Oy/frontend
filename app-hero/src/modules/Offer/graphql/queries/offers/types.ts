import {
  GraphQlInput,
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

export type OffersInput = GraphQlInput<
  {
    role?: OfferUserRole;
  } & GraphQlPaginationArguments<OfferFilter, OfferOrderColumn>
>;
