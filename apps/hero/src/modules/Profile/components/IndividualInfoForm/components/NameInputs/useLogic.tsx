import { useEffect, useMemo } from 'react';

import { DISPLAYED_NAME_PLACEHOLDER } from '../../constants';

import { UseLogic } from './types';

import { INDIVIDUAL_DISPLAYED_NAME_PREFIX } from '$configs';
import { ProfileCreation } from '$modules/Profile/stores';

type SetDisplayName = (
  args: Partial<ProfileCreation['individualInfo']>,
) => void;

export const useLogic: UseLogic = (params) => {
  const { setValue, watch } = params;

  const setDisplayedName: SetDisplayName = useMemo(
    () => (args) => {
      const { name, lastName } = args;
      const fullName = `${name?.trim()} ${lastName?.trim()}`.trim();

      const displayedName = fullName
        ? INDIVIDUAL_DISPLAYED_NAME_PREFIX.concat(fullName)
        : DISPLAYED_NAME_PLACEHOLDER;

      setValue('displayedName', displayedName, {
        shouldValidate: true,
      });
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
