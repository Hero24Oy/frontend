import { Purchase } from './Purchase';

import { Maybe } from '$core';

export type OfferInitialData = {
  agreedStartTime: Date;
  buyerProfileId: string;
  createdAt: Date;
  offerRequestId: string;
  pricePerHour: number;
  purchase: Purchase;
  sellerProfileId: string;
  categoryId?: Maybe<string>;
};
