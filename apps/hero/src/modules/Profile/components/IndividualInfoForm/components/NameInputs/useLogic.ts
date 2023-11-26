import { useEffect } from 'react';

import {
  INDIVIDUAL_HERO_NAME_PLACEHOLDER,
  INDIVIDUAL_HERO_NAME_SEPARATOR,
} from '../../constants';

import { SetDisplayName, UseLogicParams } from './types';

import { HERO_COMPANY_NAME } from '$configs';
import { ProfileCreation } from '$modules/Profile/stores';

const watchedNames: (keyof ProfileCreation['individualInfo'])[] = [
  'firstName',
  'lastName',
];

export const useLogic = (params: UseLogicParams) => {
  const { setValue, watch } = params;

  const setDisplayedName: SetDisplayName = (args) => {
    const { firstName, lastName } = args;
    const fullName = `${firstName?.trim()} ${lastName?.trim()}`;

    const displayedName = fullName.trim()
      ? HERO_COMPANY_NAME.concat(INDIVIDUAL_HERO_NAME_SEPARATOR, fullName)
      : INDIVIDUAL_HERO_NAME_PLACEHOLDER;

    setValue('name', displayedName, {
      shouldValidate: true,
    });
  };

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name && watchedNames.includes(name)) {
        setDisplayedName(value);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);
};
