import { OFFER_STATUS } from 'hero24-types';

import { OfferData } from './OfferData';
import { OfferEarnings } from './OfferEarnings';

import { Maybe } from '$core';

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
