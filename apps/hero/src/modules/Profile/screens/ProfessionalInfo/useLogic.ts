import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { professionalInfoSchema } from './validation';

import {
  ProfileCreation,
  profileCreationInitialState,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setProfessionalInfo } = useProfileCreationStore();

  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<ProfileCreation['professionalInfo']>({
    resolver: yupResolver<ProfileCreation['professionalInfo']>(
      professionalInfoSchema,
    ),
    defaultValues: profileCreationInitialState.professionalInfo,
    mode: 'onChange',
  });

  // TODO set proper route when next screen will be ready
  const submitData = useCallback(() => {
    setProfessionalInfo(getValues());
    router.push('/');
  }, []);

  return { control, setValue, isValid, submitData };
};
