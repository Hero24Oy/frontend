import {
  GraphQlInput,
  GraphQlPaginationArguments,
  OfferOrderColumn,
  OfferStatus,
  OfferUserRole,
} from '@hero24/common';

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
