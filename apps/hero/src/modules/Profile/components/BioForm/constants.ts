import { ProfileType } from '$modules/Profile/stores';

// TODO replace text with i18n
export const textareaPlaceholderMapper = {
  [ProfileType.COMPANY]: 'Tell customers about your company',
  [ProfileType.SELF_EMPLOYED]: 'Tell customers about yourself',
} satisfies Record<ProfileType, string>;
