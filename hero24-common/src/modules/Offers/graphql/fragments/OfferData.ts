import { gql } from '@apollo/client';

import { Maybe } from 'components/types';

import {
  OFFER_INITIAL_DATA_FRAGMENT,
  OfferInitialData,
} from './OfferInitialData';
import { Purchase, PURCHASE_FRAGMENT } from './Purchase';
import { WORK_TIME_FRAGMENT, WorkTime } from './WorkTime';

export type OfferData = {
  initial: OfferInitialData;
  isPaused: boolean;
  seenBySeller: boolean;
  actualCompletedTime?: Maybe<Date>;
  actualStartTime?: Maybe<Date>;
  extensions?: Maybe<Purchase[]>;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  pauseDurationMS?: Maybe<number>;
  requestedChangesAccepted?: Maybe<boolean>;
  workTime?: Maybe<WorkTime[]>;
};

export const OFFER_DATA_FRAGMENT = gql`
  ${PURCHASE_FRAGMENT}
  ${WORK_TIME_FRAGMENT}
  ${OFFER_INITIAL_DATA_FRAGMENT}

  fragment OfferDataInfo on OfferDataDto {
    extensions {
      ...PurchaseInfo
    }
    workTime {
      ...WorkTimeInfo
    }
    actualStartTime
    actualCompletedTime
    isPaused
    pauseDurationMS
    seenBySeller
    initial {
      ...OfferInitialData
    }
    requestedChangesAccepted
  }
`;
