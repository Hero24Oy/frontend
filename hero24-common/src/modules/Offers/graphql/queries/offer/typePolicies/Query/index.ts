import { TypePolicy } from '@apollo/client';

import { read } from './read';

export const Query: TypePolicy = {
  fields: {
    offer: {
      keyArgs: false,
      read,
    },
  },
};
