import { Country } from '@hero24/common';

import { Postcode } from './types';

export const postcodeMapper = new Map<Country, Postcode>([
  [
    Country.FI,
    {
      mask: '99999',
      maxLength: 5,
      placeholder: '00000',
      regex: /^\d+$/,
    },
  ],
]);
