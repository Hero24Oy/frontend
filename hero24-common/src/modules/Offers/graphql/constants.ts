export enum OfferOrderColumn {
  ID = 'ID',
  STATUS = 'STATUS',
  START_TIME = 'START_TIME',
}

export enum OfferUserRole {
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

// eslint-disable-next-line @typescript-eslint/naming-convention -- Eslint argues even though it's in exceptions in eslint.js
export enum OfferStatus {
  OPEN = 'OPEN',
  ACCEPTED = 'ACCEPTED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
}
