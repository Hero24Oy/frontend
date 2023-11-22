import { HeroType } from '$modules/Profile/stores';

// TODO replace text with i18n
export const headingTextMapper = {
  [HeroType.PROFESSIONAL]: 'Add company address',
  [HeroType.INDIVIDUAL]: 'Add your address',
} satisfies Record<HeroType, string>;
