import { Maybe } from '../../../../core/types';

import { Purchase } from './Purchase';

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
