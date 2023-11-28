import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { StrictType, useCreateMultiProgressBar } from '@hero24/common';

import { bioSchema } from './validation';

import {
  getMultiProgressBarInitialState,
  ProfileCreation,
  profileCreationInitialState,
  useHeroType,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const { setBio } = useProfileCreationStore();
  const heroType = useHeroType<StrictType.STRICT>();

  const router = useRouter();

  const { control, getValues, setValue, resetField, formState } = useForm<
    ProfileCreation['bio']
  >({
    resolver: yupResolver<ProfileCreation['bio']>(bioSchema),
    defaultValues: profileCreationInitialState.bio,
    mode: 'onChange',
  });

  const { multiScreenProgressBar } = useCreateMultiProgressBar<
    ProfileCreation['bio']
  >({
    initialState: getMultiProgressBarInitialState(heroType),
    progressBarInfo: {
      formState,
      getValues,
      progressBarIndex: 4,
    },
  });

  // TODO set proper route when next screen will be ready
  const submitData = useCallback(() => {
    setBio(getValues());
    router.push('/');
  }, []);

  return {
    control,
    setValue,
    isValid: formState.isValid,
    submitData,
    getValues,
    resetField,
    multiScreenProgressBar,
    heroType,
  };
};
