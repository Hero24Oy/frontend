import { OfferInitialData } from './OfferInitialData';
import { Purchase } from './Purchase';
import { WorkTime } from './WorkTime';

import { Maybe } from '$core';

export type OfferData = {
  initial: OfferInitialData;
  isPaused: boolean;
  seenBySeller: boolean;
  actualCompletedTime?: Maybe<Date>;
  actualStartTime?: Maybe<Date>;
  extensions?: Maybe<Purchase[]>;
  pauseDurationMS?: Maybe<number>;
  requestedChangesAccepted?: Maybe<boolean>;
  workTime?: Maybe<WorkTime[]>;
};
