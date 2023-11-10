import { Maybe } from '$core';

export type WorkTime = {
  startTime: Date;
  endTime?: Maybe<Date>;
};
