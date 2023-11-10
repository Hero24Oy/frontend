import { Maybe } from '$core';

export type Purchase = {
  createdAt: Date;
  duration: number;
  pricePerHour: number;
  reason?: Maybe<string>;
};
