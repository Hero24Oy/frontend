import { TypePolicies } from '@apollo/client';

import { offersTypePolicy } from './queries/offer/typePolicies';
import { offerTypePolicy } from './queries/offers/typePolicies';

export const offersTypePolicies: TypePolicies[] = [
  offerTypePolicy,
  offersTypePolicy,
].flat();
