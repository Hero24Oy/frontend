import { useMemo } from 'react';
import { Path, UseFormGetValues, UseFormResetField } from 'react-hook-form';

import { useModal } from '@hero24/common';

import { useGetLanguages } from '$modules/Profile/graphql';
import {
  ProfileCreation,
  profileCreationInitialState,
} from '$modules/Profile/stores';

type Params = {
  getValues: UseFormGetValues<ProfileCreation['bio']>;
  name: Path<ProfileCreation['bio']>;
  resetField: UseFormResetField<ProfileCreation['bio']>;
};

export const useLogic = (params: Params) => {
  const { getValues, resetField, name } = params;

  const {
    getLanguages: { data, loading: isLanguagesLoading },
  } = useGetLanguages();

  const { isOpen, onApplyHandler, onCloseHandler, onOpenHandler } = useModal({
    getValues,
    resetField,
    name,
    initialState: profileCreationInitialState.bio.languages,
  });

  const options = useMemo(() => {
    const languages = data?.langs.en;

    if (languages) {
      // TODO with i18n we will be able to choose right languages set. For now - english set will be used.
      return languages.map((item) => ({
        label: item,
        value: item,
      }));
    }

    return [];
  }, [data]);

  return {
    isOpen,
    options,
    isLanguagesLoading,
    onOpenHandler,
    onApplyHandler,
    onCloseHandler,
  };
};
