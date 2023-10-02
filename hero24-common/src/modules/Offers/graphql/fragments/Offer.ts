import { gql } from '@apollo/client';
import { OFFER_STATUS } from 'hero24-types';

// TODO add path alias
import { Maybe } from '../../../../core/types';

import { OFFER_DATA_FRAGMENT, OfferData } from './OfferData';
import { OFFER_EARNINGS_FRAGMENT, OfferEarnings } from './OfferEarnings';

export type Offer = {
  chatId: string;
  data: OfferData;
  id: string;
  isApproved: boolean;
  seenByBuyer: boolean;
  status: OFFER_STATUS;
  earnings?: Maybe<OfferEarnings>;
  hubSpotDealId?: Maybe<string>;
  netvisorOrderId?: Maybe<string>;
  netvisorPurchaseInvoiceBatchId?: Maybe<string>;
  netvisorPurchaseInvoiceId?: Maybe<string>;
  netvisorSalesInvoiceId?: Maybe<string>;
  paymentInfoId?: Maybe<string>;
  paymentTransactions?: Maybe<string[]>;
  pre15MinReminderSent?: Maybe<boolean>;
  pre30MinReminderSent?: Maybe<boolean>;
  preDayReminderSent?: Maybe<boolean>;
  preHourReminderSent?: Maybe<boolean>;
  reasonToExtend?: string;
  sendToNetvisorPurchaseInvoice?: Maybe<number>;
  sendToNetvisorSalesInvoice?: Maybe<number>;
  stripePaymentIntentId?: Maybe<string>;
  timeEndedAfter15MinReminderSent?: Maybe<boolean>;
  timeEndedReminderSent?: Maybe<boolean>;
  timeToExtend?: Maybe<number>;
};

export const OFFER_FRAGMENT = gql`
  ${OFFER_DATA_FRAGMENT}
  ${OFFER_EARNINGS_FRAGMENT}

  fragment OfferInfo on OfferDto {
    id
    status
    data {
      ...OfferDataInfo
    }
    seenByBuyer
    isApproved
    chatId
    timeToExtend
    reasonToExtend
    paymentTransactions
    earnings {
      ...OfferEarningsInfo
    }
    preDayReminderSent
    preHourReminderSent
    pre30MinReminderSent
    pre15MinReminderSent
    timeEndedReminderSent
    timeEndedAfter15MinReminderSent
    netvisorOrderId
    netvisorSalesInvoiceId
    netvisorPurchaseInvoiceId
    netvisorPurchaseInvoiceBatchId
    sendToNetvisorSalesInvoice
    sendToNetvisorPurchaseInvoice
    paymentInfoId
    stripePaymentIntentId
    hubSpotDealId
  }
`;
