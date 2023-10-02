import { JSX } from 'react';
import { Maybe as MaybeYup } from 'yup';

export type JsxElement = JSX.Element;

export type OfferIdInput = {
  offerId: string;
};

export type OfferRequestIdInput = {
  offerRequestId: string;
};

export type OfferAndRequestIdsInput = OfferIdInput & OfferRequestIdInput;

export type Maybe<Type> = MaybeYup<Type>;
