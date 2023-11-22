import { HeroType } from 'hero24-types';

// TODO replace text with i18n
export const textareaPlaceholderMapper = {
  [HeroType.PROFESSIONAL]: 'Tell customers about your company',
  [HeroType.INDIVIDUAL]: 'Tell customers about yourself',
} satisfies Record<HeroType, string>;
