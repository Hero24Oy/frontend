import { merge } from 'lodash';

import { WHITESPACE_REGEX } from './constants';

import { ProfileCreation } from '$modules/Profile/stores';

export const preparePersonalInfo = (
  personalInfo: ProfileCreation['personalInfo'],
) => {
  const {
    name: dirtyName,
    lastName: dirtyLastName,
    socialId: dirtySocialId,
  } = personalInfo;

  const socialId = dirtySocialId.replace(WHITESPACE_REGEX, '');

  const name = dirtyName.trim();
  const lastName = dirtyLastName.trim();

  return merge(personalInfo, {
    name,
    lastName,
    socialId,
  });
};
