import { useEffect, useMemo } from 'react';

import { UseLogic } from './types';

import { SELF_EMPLOYED_DISPLAYED_NAME_PREFIX } from '$configs';
import { ProfileCreation } from '$modules/Profile/stores';

type SetDisplayName = (args: Partial<ProfileCreation['personalInfo']>) => void;

export const useLogic: UseLogic = (params) => {
  const { setValue, watch } = params;

  const setDisplayedName: SetDisplayName = useMemo(
    () => (args) => {
      const { name, lastName } = args;
      const fullName = `${name?.trim()} ${lastName?.trim()}`;

      const displayedName =
        SELF_EMPLOYED_DISPLAYED_NAME_PREFIX.concat(fullName);

      setValue('displayedName', displayedName);
    },
    [setValue],
  );

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name && ['name', 'lastName'].includes(name)) {
        setDisplayedName(value);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);
};
