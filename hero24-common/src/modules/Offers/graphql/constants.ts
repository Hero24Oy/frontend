export const OFFERS_PER_PAGE = 10;

export enum OfferOrderColumn {
  ID = 'ID',
  STATUS = 'STATUS',
  START_TIME = 'START_TIME',
}

export enum OfferRole {
  SELLER = 'SELLER', // TODO change to hero
  CUSTOMER = 'CUSTOMER',
}

export enum OfferStatusInput {
  OPEN = 'OPEN',
  ACCEPTED = 'ACCEPTED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
}
