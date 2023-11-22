import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { StrictType, useCreateMultiProgressBar } from '@hero24/common';

import { addressSchema } from './validation';

import {
  getMultiProgressBarInitialState,
  ProfileCreation,
  profileCreationInitialState,
  useHeroType,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setAddress } = useProfileCreationStore();
  const { heroType } = useHeroType<StrictType.STRICT>();

  const { control, getValues, setValue, formState, resetField } = useForm<
    ProfileCreation['address']
  >({
    resolver: yupResolver<ProfileCreation['address']>(addressSchema),
    defaultValues: profileCreationInitialState.address,
    mode: 'onChange',
  });

  const { multiScreenProgressBar } = useCreateMultiProgressBar({
    initialState: getMultiProgressBarInitialState(),
    progressBarInfo: {
      formState,
      getValues,
      progressBarIndex: 2,
    },
  });

  const submitData = useCallback(() => {
    setAddress(getValues());
    router.push('/payment-data');
  }, []);

  return {
    multiScreenProgressBar,
    heroType,
    submitData,
    isValid: formState.isValid,
    control,
    setValue,
    getValues,
    resetField,
  };
};
