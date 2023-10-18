import { Maybe } from '$common/core';

export type WorkTime = {
  startTime: Date;
  endTime?: Maybe<Date>;
};
