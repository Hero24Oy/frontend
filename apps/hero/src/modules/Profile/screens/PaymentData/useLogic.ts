import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { HeroType } from 'hero24-types';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { useCreateMultiProgressBar } from '@hero24/common';

import { getDefaultValues } from './utils';
import { getPaymentDataSchema } from './validation';

import {
  getMultiProgressBarInitialState,
  ProfileCreation,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setPaymentData, welcome } = useProfileCreationStore();

  // * We are sure that we will have heroType on this stage.
  const heroType = welcome.heroType as HeroType;

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
