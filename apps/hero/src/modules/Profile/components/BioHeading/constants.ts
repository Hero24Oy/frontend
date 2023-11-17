import { ProfileType } from '$modules/Profile/stores';

// TODO replace text with i18n
export const headingTextMapper = {
  [ProfileType.COMPANY]: 'Set company BIO',
  [ProfileType.SELF_EMPLOYED]: 'Set your BIO',
} satisfies Record<ProfileType, string>;
