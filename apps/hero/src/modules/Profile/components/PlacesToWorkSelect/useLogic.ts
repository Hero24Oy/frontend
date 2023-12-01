import { useCallback, useState } from 'react';
import { UseFormGetValues, UseFormResetField } from 'react-hook-form';

import {
  PLACES_FIELD_NAME,
  RESET_FIELD_DELAY_IN_MS,
} from '../WorkDataForm/constants';

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

  const [placesFieldState, setPlacesFieldState] = useState<string[]>(
    profileCreationInitialState.workData.places,
  );

  const onOpenHandler = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseHandler = useCallback(() => {
    setIsOpen(false);

    setTimeout(() => {
      resetField(PLACES_FIELD_NAME, {
        defaultValue: profileCreationInitialState.workData.places,
      });
    }, RESET_FIELD_DELAY_IN_MS);
  }, [
    resetField,
    PLACES_FIELD_NAME,
    RESET_FIELD_DELAY_IN_MS,
    profileCreationInitialState.workData.places,
  ]);

  const onApplyHandler = useCallback(() => {
    setIsOpen(false);
    setPlacesFieldState(getValues(PLACES_FIELD_NAME));
  }, [getValues, PLACES_FIELD_NAME]);

  const places = ['First', 'Second', 'Third'];

  return {
    placesFieldState,
    isOpen,
    // TODO replace this fields
    places,
    onOpenHandler,
    onApplyHandler,
    onCloseHandler,
  };
};
