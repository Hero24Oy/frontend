import { gql } from '@apollo/client';

import { OFFER_DATA_FRAGMENT } from './OfferData';
import { OFFER_EARNINGS_FRAGMENT } from './OfferEarnings';

export const OFFER_FRAGMENT = gql`
  ${OFFER_DATA_FRAGMENT}
  ${OFFER_EARNINGS_FRAGMENT}

  fragment OfferFragment on OfferDto {
    id
    status
    data {
      ...OfferDataFragment
    }
    seenByBuyer
    isApproved
    chatId
    timeToExtend
    reasonToExtend
    paymentTransactions
    earnings {
      ...OfferEarningsFragment
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
