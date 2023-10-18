import { Maybe } from '../../../../core/types';

import { OfferInitialData } from './OfferInitialData';
import { Purchase } from './Purchase';
import { WorkTime } from './WorkTime';

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
