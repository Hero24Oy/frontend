import { StrictType } from '@hero24/common';

import { useProfileCreationStore } from '../store';
import { ProfileCreation } from '../types';

type HeroType = ProfileCreation['welcome']['heroType'];

type HeroValue<Strict extends StrictType> = Strict extends StrictType.STRICT
  ? NonNullable<HeroType>
  : HeroType;

export const useHeroType = <Strict extends StrictType>(): HeroValue<Strict> => {
  const heroType = useProfileCreationStore((state) => state.welcome.heroType);

  return heroType as HeroValue<Strict>;
};
