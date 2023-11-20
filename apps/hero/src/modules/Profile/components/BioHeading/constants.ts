import { HeroType } from '$modules/Profile/stores';

// TODO replace text with i18n
export const headingTextMapper = {
  [HeroType.PROFESSIONAL]: 'Set company BIO',
  [HeroType.INDIVIDUAL]: 'Set your BIO',
} satisfies Record<HeroType, string>;
