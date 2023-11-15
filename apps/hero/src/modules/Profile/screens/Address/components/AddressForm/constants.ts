import { Countries } from '@hero24/common';

import { Postcode } from './types';

export const Postcodes: Record<keyof typeof Countries, Postcode> = {
  [Countries.FI]: {
    mask: '99999',
    maxLength: 5,
    placeholder: '00000',
    regex: /^\d+$/,
  },
};
