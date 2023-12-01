import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { StrictType, useCreateMultiProgressBar } from '@hero24/common';

import { workDataSchema } from './validation';

import {
  getMultiProgressBarInitialState,
  ProfileCreation,
  profileCreationInitialState,
  useHeroType,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setWorkData } = useProfileCreationStore();
  const heroType = useHeroType<StrictType.STRICT>();

  const { control, getValues, setValue, formState, resetField } = useForm<
    ProfileCreation['workData']
  >({
    resolver: yupResolver<ProfileCreation['workData']>(workDataSchema),
    defaultValues: profileCreationInitialState.workData,
    mode: 'onChange',
  });

  const { multiScreenProgressBar } = useCreateMultiProgressBar<
    ProfileCreation['workData']
  >({
    initialState: getMultiProgressBarInitialState(heroType),
    progressBarInfo: {
      formState,
      getValues,
      progressBarIndex: 1,
    },
  });

  // TODO set proper route when next screen will be ready
  const submitData = useCallback(() => {
    setWorkData(getValues());
    router.push('/address');
  }, []);

  return {
    multiScreenProgressBar,
    control,
    setValue,
    isValid: formState.isValid,
    submitData,
    resetField,
    getValues,
  };
};
