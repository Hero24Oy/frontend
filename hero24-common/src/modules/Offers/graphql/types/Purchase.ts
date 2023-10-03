import { Maybe } from '../../../../core/types';

export type Purchase = {
  createdAt: Date;
  duration: number;
  pricePerHour: number;
  reason?: Maybe<string>;
};
