import merge from 'lodash/merge';
import { useMemo } from 'react';

import { useCachedGraphQlUser } from '@hero24/common';

import { HERO_COMPANY_NAME } from '$configs';
import { INDIVIDUAL_HERO_NAME_SEPARATOR } from '$modules/Profile/components/IndividualInfoForm/constants';
import { profileCreationInitialState } from '$modules/Profile/stores';

export const useDefaultValues = () => {
  const {
    user: {
      data: {
        firstName: initialFirstName,
        lastName: initialLastName,
        email: initialEmail,
      },
    },
  } = useCachedGraphQlUser();

  const {
    firstName: defaultFirstName,
    lastName: defaultLastName,
    email: defaultEmail,
  } = profileCreationInitialState.individualInfo;

  const defaultValues = useMemo(() => {
    const firstName = initialFirstName ?? defaultFirstName;
    const lastName = initialLastName ?? defaultLastName;
    const email = initialEmail ?? defaultEmail;

    const name = HERO_COMPANY_NAME.concat(
      INDIVIDUAL_HERO_NAME_SEPARATOR,
      `${initialFirstName} ${initialLastName}`,
    );

    return merge(profileCreationInitialState.individualInfo, {
      firstName,
      lastName,
      email,
      name,
    });
  }, [initialEmail, initialFirstName, initialLastName]);

  return { defaultValues };
};
