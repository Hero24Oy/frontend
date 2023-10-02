export const OFFERS_PER_PAGE = 10;

export enum OfferOrderColumn {
  ID = 'ID',
  STATUS = 'STATUS',
  START_TIME = 'START_TIME',
}

export enum OfferUserRole {
  SELLER = 'SELLER', // TODO change to hero
  CUSTOMER = 'CUSTOMER',
}

// eslint-disable-next-line @typescript-eslint/naming-convention -- Eslint argues even though it's in exceptions in eslint.js
export enum GraphQLOfferStatus {
  OPEN = 'OPEN',
  ACCEPTED = 'ACCEPTED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
}