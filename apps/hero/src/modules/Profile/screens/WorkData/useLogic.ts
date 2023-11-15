import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { workDataSchema } from './validation';

import {
  ProfileCreation,
  profileCreationInitialState,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const { setWorkData } = useProfileCreationStore();

  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<ProfileCreation['workData']>({
    resolver: yupResolver<ProfileCreation['workData']>(workDataSchema),
    defaultValues: profileCreationInitialState.workData,
    mode: 'onChange',
  });

  const onChange = useCallback(() => {
    setWorkData(getValues());
  }, []);

  return { control, setValue, isValid, onChange };
};
