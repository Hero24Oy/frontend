import { useState } from 'react';
import { UseFormGetValues, UseFormResetField } from 'react-hook-form';

import { Bio } from '../BioForm/types';

import { LANGUAGES_FIELD_NAME, RESET_FIELD_DELAY } from './constants';

import { useGetLanguages } from '$modules/Profile/graphql';
import { profileCreationInitialState } from '$modules/Profile/stores';

type Params = {
  getValues: UseFormGetValues<Bio>;
  resetField: UseFormResetField<Bio>;
};

export const useLogic = (params: Params) => {
  const { getValues, resetField } = params;

  const {
    getLanguages: { data, loading: isLanguagesLoading },
  } = useGetLanguages();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [languageFieldState, setLanguageFieldState] = useState<string[]>(
    profileCreationInitialState.bio.languages,
  );

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const onApplyHandler = () => {
    setIsOpen(false);
    setLanguageFieldState(getValues(LANGUAGES_FIELD_NAME));
  };

  const onCloseHandler = () => {
    setIsOpen(false);

    setTimeout(() => {
      resetField(LANGUAGES_FIELD_NAME, { defaultValue: languageFieldState });
    }, RESET_FIELD_DELAY);
  };

  // TODO with i18n we will be able to choose right languages set. For now - english set will be used.
  return {
    isOpen,
    languages: data?.langs.en,
    isLanguagesLoading,
    openModalHandler,
    onApplyHandler,
    onCloseHandler,
  };
};
