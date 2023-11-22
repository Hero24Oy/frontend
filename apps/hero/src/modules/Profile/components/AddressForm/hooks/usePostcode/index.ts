import { useMemo } from 'react';
import { UseFormGetValues } from 'react-hook-form';

import { postcodeMapper } from './constants';
import { Postcode } from './types';

import { ProfileCreation } from '$modules/Profile/stores';

type Params = {
  getValues: UseFormGetValues<ProfileCreation['address']>;
};

export const usePostcode = (params: Params): Postcode | undefined => {
  const { getValues } = params;
  const key = getValues('country');

  const postcode = useMemo(() => postcodeMapper.get(key), [key]);

  return postcode;
};

export * from './constants';
