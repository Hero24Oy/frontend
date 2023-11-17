import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useCreateMultiProgressBar } from '@hero24/common';

import { companyInfoSchema } from './validation';

import {
  getMultiProgressBarInitialState,
  ProfileCreation,
  profileCreationInitialState,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setInfo } = useProfileCreationStore();

  const { multiScreenProgressBar, setCurrentProgressBarInfo } =
    useCreateMultiProgressBar<ProfileCreation['info']>({
      initialState: getMultiProgressBarInitialState(),
    });

  const { control, getValues, setValue, formState } = useForm<
    ProfileCreation['info']
  >({
    resolver: yupResolver<ProfileCreation['info']>(companyInfoSchema),
    defaultValues: profileCreationInitialState.info,
    mode: 'onChange',
  });

  // TODO set proper route when next screen will be ready
  const submitData = useCallback(() => {
    setInfo(getValues());
    router.push('/');
  }, []);

  useEffect(() => {
    setCurrentProgressBarInfo({
      progressBarIndex: 0,
      formState,
      getValues,
    });
  }, []);

  return {
    multiScreenProgressBar,
    control,
    setValue,
    isValid: formState.isValid,
    submitData,
  };
};
