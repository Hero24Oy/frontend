import { JSX } from 'react';

export type JsxElement = JSX.Element;

export type OfferIdInput = {
  offerId: string;
};

export type OfferRequestIdInput = {
  offerRequestId: string;
};

export type OfferAndRequestIdsInput = OfferIdInput & OfferRequestIdInput;
