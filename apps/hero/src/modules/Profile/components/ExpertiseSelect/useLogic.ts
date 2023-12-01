import { useCallback, useState } from 'react';
import { UseFormGetValues, UseFormResetField } from 'react-hook-form';

import {
  EXPERTISE_CATEGORIES_FIELD,
  EXPERTISE_CATEGORIES_NAMES,
  EXPERTISE_FIELD_NAME,
  RESET_FIELD_DELAY_IN_MS,
} from '../WorkDataForm/constants';
import { WorkData } from '../WorkDataForm/types';

import {
  ProfileCreation,
  profileCreationInitialState,
} from '$modules/Profile/stores';

type Params = {
  getValues: UseFormGetValues<ProfileCreation['workData']>;
  resetField: UseFormResetField<ProfileCreation['workData']>;
};

export const useLogic = (params: Params) => {
  const { getValues, resetField } = params;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState<boolean>(false);

  const [expertiseFieldState, setExpertiseFieldState] = useState<
    WorkData['expertise']
  >(profileCreationInitialState.workData.expertise);

  const onOpenHandler = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseHandler = useCallback(() => {
    setIsOpen(false);

    resetField(EXPERTISE_CATEGORIES_NAMES, {
      defaultValue: [],
    });

    setTimeout(() => {
      resetField(EXPERTISE_FIELD_NAME, {
        defaultValue: null,
      });
    }, RESET_FIELD_DELAY_IN_MS);
  }, [
    resetField,
    EXPERTISE_FIELD_NAME,
    RESET_FIELD_DELAY_IN_MS,
    profileCreationInitialState.workData.expertise,
  ]);

  const onApplyHandler = useCallback(() => {
    setIsDisclaimerOpen(false);
    setIsOpen(false);
    setExpertiseFieldState(getValues(EXPERTISE_FIELD_NAME));
  }, [EXPERTISE_FIELD_NAME]);

  const onDisclaimerOpenHandler = useCallback(() => {
    setIsDisclaimerOpen(true);
  }, []);

  const onDisclaimerCloseHandler = useCallback(() => {
    setIsDisclaimerOpen(false);
  }, []);

  const onResetHandler = useCallback(() => {
    const expertise = getValues(EXPERTISE_CATEGORIES_FIELD);

    if (expertise) {
      const expertiseFields = Object.keys(expertise);

      expertiseFields.forEach((field) => {
        resetField(`${EXPERTISE_CATEGORIES_FIELD}.${field}`, {
          defaultValue: [],
        });
      });
    }
  }, [
    resetField,
    EXPERTISE_FIELD_NAME,
    profileCreationInitialState.workData.expertise,
  ]);

  // TODO replace this on fetched data
  const expertise = {
    cleaning: {
      title: 'Cleaning & domestic help',
      items: ['Four', 'Five', 'Six'],
    },
    plumbing: { title: 'Plumbing', items: ['seven', 'eight'] },
  };

  return {
    expertiseFieldState,
    isOpen,
    // TODO replace this field
    expertise,
    onOpenHandler,
    onApplyHandler,
    onCloseHandler,
    onDisclaimerCloseHandler,
    onDisclaimerOpenHandler,
    isDisclaimerOpen,
    onResetHandler,
  };
};
