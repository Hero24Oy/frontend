import { EARNINGS_STATUS } from 'hero24-types';

import { Maybe } from '../../../../core/types';

export type OfferEarnings = {
  status: EARNINGS_STATUS;
  updatedAt: Date;
  message?: Maybe<string>;
};
