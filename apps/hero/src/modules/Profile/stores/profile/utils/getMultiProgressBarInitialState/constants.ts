import { HeroType } from 'hero24-types';

import { ProfileCreation } from '../../types';

export const omittedFormMapper = {
  [HeroType.INDIVIDUAL]: 'professionalInfo',
  [HeroType.PROFESSIONAL]: 'individualInfo',
} satisfies Record<HeroType, keyof ProfileCreation>;
