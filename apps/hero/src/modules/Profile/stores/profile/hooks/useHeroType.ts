import { StrictType } from '@hero24/common';

import { useProfileCreationStore } from '../store';
import { ProfileCreation } from '../types';

type HeroType = ProfileCreation['welcome']['heroType'];

type ReturnType<Strict = StrictType> = {
  heroType: Strict extends StrictType.STRICT ? NonNullable<HeroType> : HeroType;
};

export const useHeroType = <Strict = StrictType>(): ReturnType<Strict> => {
  const {
    welcome: { heroType },
  } = useProfileCreationStore();

  return {
    heroType,
  } as ReturnType<Strict>;
};
