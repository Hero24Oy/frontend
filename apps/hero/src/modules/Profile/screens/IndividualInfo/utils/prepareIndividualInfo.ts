import merge from 'lodash/merge';

import { WHITESPACE_REGEX } from './constants';

import { ProfileCreation } from '$modules/Profile/stores';

export const prepareIndividualInfo = (
  personalInfo: ProfileCreation['individualInfo'],
) => {
  const {
    firstName: dirtyFirstName,
    lastName: dirtyLastName,
    socialId: dirtySocialId,
  } = personalInfo;

  const socialId = dirtySocialId.replace(WHITESPACE_REGEX, '');

  const firstName = dirtyFirstName.trim();
  const lastName = dirtyLastName.trim();

  const preparedPersonalInfo: ProfileCreation['individualInfo'] = merge(
    personalInfo,
    {
      firstName,
      lastName,
      socialId,
    },
  );

  return preparedPersonalInfo;
};
