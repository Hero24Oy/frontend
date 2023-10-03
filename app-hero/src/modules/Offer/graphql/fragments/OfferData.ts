import { gql } from '@apollo/client';

import { OFFER_INITIAL_DATA_FRAGMENT } from './OfferInitialData';
import { PURCHASE_FRAGMENT } from './Purchase';
import { WORK_TIME_FRAGMENT } from './WorkTime';

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
