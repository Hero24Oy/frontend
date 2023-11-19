import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { preparePersonalInfo } from '../utils';
import { personalInfoSchema } from '../validation';

import {
  ProfileCreation,
  profileCreationInitialState,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();

  const { setPersonalInfo } = useProfileCreationStore();

  const { control, getValues, setValue, formState, watch } = useForm({
    resolver: yupResolver<ProfileCreation['personalInfo']>(personalInfoSchema),
    defaultValues: profileCreationInitialState.personalInfo,
    mode: 'onChange',
  });

  // TODO set proper route when next screen will be ready
  const submitData = useCallback(() => {
    const values = getValues();

    const preparedPersonalInfo = preparePersonalInfo(values);

    setPersonalInfo(preparedPersonalInfo);
    router.push('/');
  }, []);

  return {
    control,
    setValue,
    getValues,
    isValid: formState.isValid,
    submitData,
    watch,
  };
};
