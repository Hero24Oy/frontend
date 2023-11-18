import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { personalInfoSchema } from './validation';

import {
  ProfileCreation,
  profileCreationInitialState,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setPersonalInfo } = useProfileCreationStore();

  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<ProfileCreation['personalInfo']>({
    resolver: yupResolver<ProfileCreation['personalInfo']>(personalInfoSchema),
    defaultValues: profileCreationInitialState.companyInfo,
    mode: 'onChange',
  });

  // TODO set proper route when next screen will be ready
  const submitData = useCallback(() => {
    setPersonalInfo(getValues());
    router.push('/');
  }, []);

  return { control, setValue, isValid, submitData };
};
