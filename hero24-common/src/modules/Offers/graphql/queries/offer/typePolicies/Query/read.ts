import { FieldFunctionOptions, FieldReadFunction } from '@apollo/client';

import { GraphQlInput } from '../../../../../../../core';
import { OFFER_TYPE_NAME, Variables } from '../../query';

// * If there exist already such item, get it from cache
export const read = ((
  _,
  options: FieldFunctionOptions<Partial<GraphQlInput<Variables>>>,
) => {
  const { args, toReference } = options;

  return toReference({
    __typename: OFFER_TYPE_NAME,
    id: args?.input?.offerId,
  });
}) as FieldReadFunction;
