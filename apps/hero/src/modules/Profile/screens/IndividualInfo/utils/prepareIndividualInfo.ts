import merge from 'lodash/merge';

import { WHITESPACE_REGEX } from './constants';

import { ProfileCreation } from '$modules/Profile/stores';

export const prepareIndividualInfo = (
  personalInfo: ProfileCreation['individualInfo'],
) => {
  const {
    name: dirtyName,
    lastName: dirtyLastName,
    socialId: dirtySocialId,
  } = personalInfo;

  const socialId = dirtySocialId.replace(WHITESPACE_REGEX, '');

  const name = dirtyName.trim();
  const lastName = dirtyLastName.trim();

  const preparedPersonalInfo: ProfileCreation['individualInfo'] = merge(
    personalInfo,
    {
      name,
      lastName,
      socialId,
    },
  );

  return preparedPersonalInfo;
};
