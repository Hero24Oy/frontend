import { TypePolicy } from '@apollo/client';

import { merge } from './merge';

export const Query: TypePolicy = {
  fields: {
    offers: {
      keyArgs: false,
      merge,
    },
  },
};
