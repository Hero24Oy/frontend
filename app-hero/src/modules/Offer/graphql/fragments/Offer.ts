import { gql } from '@apollo/client';

import { OFFER_DATA_FRAGMENT } from './OfferData';
import { OFFER_EARNINGS_FRAGMENT } from './OfferEarnings';

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
