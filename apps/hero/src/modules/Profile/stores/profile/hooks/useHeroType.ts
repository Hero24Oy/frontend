import { StrictValue } from '@hero24/common';

import { useProfileCreationStore } from '../store';
import { ProfileCreation } from '../types';

type HeroType = ProfileCreation['welcome']['heroType'];

type ReturnType<Strict = StrictValue> = {
  heroType: Strict extends StrictValue.STRICT
    ? NonNullable<HeroType>
    : HeroType;
};

export const useHeroType = <Strict = StrictValue>(): ReturnType<Strict> => {
  const {
    welcome: { heroType },
  } = useProfileCreationStore();

  return {
    heroType,
  } as ReturnType<Strict>;
};
