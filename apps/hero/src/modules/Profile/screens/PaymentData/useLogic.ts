import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { useCreateMultiProgressBar } from '@hero24/common';

import { getDefaultValues } from './utils';
import { getPaymentDataSchema } from './validation';

import {
  getMultiProgressBarInitialState,
  HeroType,
  ProfileCreation,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const {
    setPaymentData,
    welcome: { heroType },
  } = useProfileCreationStore();

  const router = useRouter();

  const { control, getValues, formState } = useForm<
    ProfileCreation['paymentData']
  >({
    resolver: yupResolver<ProfileCreation['paymentData']>(
      getPaymentDataSchema(heroType!),
    ),
    defaultValues: getDefaultValues(heroType!),
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
    router.push('/');
  }, []);

  return {
    multiScreenProgressBar,
    control,
    isValid: formState.isValid,
    submitData,
    heroType: heroType ?? HeroType.INDIVIDUAL,
  };
};
