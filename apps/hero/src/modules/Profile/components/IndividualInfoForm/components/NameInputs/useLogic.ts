import { useEffect, useMemo } from 'react';

import { DISPLAYED_NAME_PLACEHOLDER } from '../../constants';

import { SetDisplayName, UseLogicParams } from './types';

import { INDIVIDUAL_DISPLAYED_NAME_PREFIX } from '$configs';
import { ProfileCreation } from '$modules/Profile/stores';

const watchedNames: (keyof ProfileCreation['individualInfo'])[] = [
  'firstName',
  'lastName',
];

export const useLogic = (params: UseLogicParams) => {
  const { setValue, watch } = params;

  const setDisplayedName: SetDisplayName = useMemo(
    () => (args) => {
      const { firstName, lastName } = args;
      const fullName = `${firstName?.trim()} ${lastName?.trim()}`;

      const displayedName = fullName.trim()
        ? INDIVIDUAL_DISPLAYED_NAME_PREFIX.concat(fullName)
        : DISPLAYED_NAME_PLACEHOLDER;

      setValue('name', displayedName, {
        shouldValidate: true,
      });
    },
    [setValue, watch],
  );

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name && watchedNames.includes(name)) {
        setDisplayedName(value);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);
};
