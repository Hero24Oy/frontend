import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { StrictType, useCreateMultiProgressBar } from '@hero24/common';

import { getDefaultValues } from './utils';
import { getPaymentDataSchema } from './validation';

import {
  getMultiProgressBarInitialState,
  ProfileCreation,
  useHeroType,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setPaymentData } = useProfileCreationStore();
  const { heroType } = useHeroType<StrictType.STRICT>();

  const { control, getValues, formState } = useForm<
    ProfileCreation['paymentData']
  >({
    resolver: yupResolver<ProfileCreation['paymentData']>(
      getPaymentDataSchema(heroType),
    ),
    defaultValues: getDefaultValues(heroType),
    mode: 'onChange',
  });

  const { multiScreenProgressBar } = useCreateMultiProgressBar({
    initialState: getMultiProgressBarInitialState(),
    progressBarInfo: {
      formState,
      getValues,
      progressBarIndex: 3,
    },
  });

  const submitData = useCallback(() => {
    setPaymentData(getValues());
    router.push('/bio');
  }, []);

  return {
    multiScreenProgressBar,
    control,
    isValid: formState.isValid,
    submitData,
    heroType,
  };
};
