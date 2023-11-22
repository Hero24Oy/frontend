import { useMemo } from 'react';
import { Path, UseFormGetValues, UseFormResetField } from 'react-hook-form';

import { useModal } from '@hero24/common';

import { useGetWorkareas } from '$modules/Profile/graphql';
import {
  ProfileCreation,
  profileCreationInitialState,
} from '$modules/Profile/stores';

type Params = {
  getValues: UseFormGetValues<ProfileCreation['address']>;
  name: Path<ProfileCreation['address']>;
  resetField: UseFormResetField<ProfileCreation['address']>;
};

export const useLogic = (params: Params) => {
  const { getValues, resetField, name } = params;

  const {
    getWorkareas: { data, loading: isWorkareasLoading },
  } = useGetWorkareas();

  const { isOpen, onApplyHandler, onCloseHandler, onOpenHandler } = useModal({
    isResetDelayed: false,
    getValues,
    resetField,
    name,
    initialState: profileCreationInitialState.address.city,
  });

  const options = useMemo(() => {
    const workareas = data?.workareas.en;

    if (workareas) {
      // TODO with i18n we will be able to choose right languages set. For now - english set will be used.
      return workareas.map((item) => ({
        label: item,
        value: item,
      }));
    }

    return [];
  }, [data]);

  return {
    isOpen,
    options,
    isWorkareasLoading,
    onOpenHandler,
    onApplyHandler,
    onCloseHandler,
  };
};
