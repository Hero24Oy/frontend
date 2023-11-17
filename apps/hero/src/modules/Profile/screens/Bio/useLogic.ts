import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { bioSchema } from './validation';

import {
  ProfileCreation,
  profileCreationInitialState,
  ProfileType,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const {
    welcome: { profileType },
    setBio,
  } = useProfileCreationStore();

  const {
    control,
    getValues,
    setValue,
    resetField,
    formState: { isValid },
  } = useForm<ProfileCreation['bio']>({
    resolver: yupResolver<ProfileCreation['bio']>(bioSchema),
    defaultValues: profileCreationInitialState.bio,
    mode: 'onChange',
  });

  const onChange = useCallback(() => {
    setBio(getValues());
  }, []);

  return {
    control,
    setValue,
    isValid,
    onChange,
    getValues,
    resetField,
    profileType: profileType as ProfileType,
  };
};
