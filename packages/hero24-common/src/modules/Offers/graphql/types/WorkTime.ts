import { Maybe } from '../../../../core/types';

export type WorkTime = {
  startTime: Date;
  endTime?: Maybe<Date>;
};
