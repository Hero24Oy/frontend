import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { StrictType, useCreateMultiProgressBar } from '@hero24/common';

import { professionalInfoSchema } from './validation';

import {
  getMultiProgressBarInitialState,
  ProfileCreation,
  profileCreationInitialState,
  useHeroType,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setProfessionalInfo } = useProfileCreationStore();
  const heroType = useHeroType<StrictType.STRICT>();

  const { control, getValues, setValue, formState } = useForm<
    ProfileCreation['professionalInfo']
  >({
    resolver: yupResolver<ProfileCreation['professionalInfo']>(
      professionalInfoSchema,
    ),
    defaultValues: profileCreationInitialState.professionalInfo,
    mode: 'onChange',
  });

  const { multiScreenProgressBar } = useCreateMultiProgressBar<
    ProfileCreation['professionalInfo']
  >({
    initialState: getMultiProgressBarInitialState(heroType),
    progressBarInfo: {
      formState,
      getValues,
      progressBarIndex: 0,
    },
  });

  // TODO set proper route when next screen will be ready
  const submitData = useCallback(() => {
    setProfessionalInfo(getValues());
    router.push('/');
  }, []);

  return {
    multiScreenProgressBar,
    control,
    setValue,
    isValid: formState.isValid,
    submitData,
  };
};
