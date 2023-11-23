import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { useCreateMultiProgressBar } from '@hero24/common';

import { prepareIndividualInfo } from '../utils';
import { individualInfoSchema } from '../validation';

import { useDefaultValues } from './useDefaultValues';

import {
  getMultiProgressBarInitialState,
  ProfileCreation,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setIndividualInfo } = useProfileCreationStore();
  const { defaultValues } = useDefaultValues();

  const { control, getValues, setValue, formState, watch } = useForm({
    resolver:
      yupResolver<ProfileCreation['individualInfo']>(individualInfoSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { multiScreenProgressBar } = useCreateMultiProgressBar<
    ProfileCreation['individualInfo']
  >({
    initialState: getMultiProgressBarInitialState(),
    progressBarInfo: {
      formState,
      getValues,
      progressBarIndex: 0,
    },
  });

  // TODO set proper route when next screen will be ready
  const submitData = useCallback(() => {
    const values = getValues();

    const preparedIndividualInfo = prepareIndividualInfo(values);

    setIndividualInfo(preparedIndividualInfo);
    router.push('/');
  }, []);

  return {
    control,
    setValue,
    getValues,
    isValid: formState.isValid,
    submitData,
    watch,
    multiScreenProgressBar,
  };
};
