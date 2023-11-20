import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useCreateMultiProgressBar } from '@hero24/common';

import { bioSchema } from './validation';

import {
  getMultiProgressBarInitialState,
  HeroType,
  ProfileCreation,
  profileCreationInitialState,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const {
    welcome: { heroType },
    setBio,
  } = useProfileCreationStore();

  const { multiScreenProgressBar, setCurrentProgressBarInfo } =
    useCreateMultiProgressBar<ProfileCreation['bio']>({
      initialState: getMultiProgressBarInitialState(),
    });

  const { control, getValues, setValue, resetField, formState } = useForm<
    ProfileCreation['bio']
  >({
    resolver: yupResolver<ProfileCreation['bio']>(bioSchema),
    defaultValues: profileCreationInitialState.bio,
    mode: 'onChange',
  });

  useEffect(() => {
    setCurrentProgressBarInfo({
      progressBarIndex: 4,
      formState,
      getValues,
    });
  }, []);

  const onChange = useCallback(() => {
    setBio(getValues());
  }, []);

  return {
    control,
    setValue,
    isValid: formState.isValid,
    onChange,
    getValues,
    resetField,
    multiScreenProgressBar,
    heroType: heroType ?? HeroType.INDIVIDUAL,
  };
};
