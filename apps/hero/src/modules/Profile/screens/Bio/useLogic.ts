import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { bioSchema } from './validation';

import {
  ProfileCreation,
  profileCreationInitialState,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const { setBio } = useProfileCreationStore();

  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<ProfileCreation['bio']>({
    resolver: yupResolver<ProfileCreation['bio']>(bioSchema),
    defaultValues: profileCreationInitialState.bio,
    mode: 'onChange',
  });

  const onChange = useCallback(() => {
    setBio(getValues());
  }, []);

  return { control, setValue, isValid, onChange };
};
