import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { companyAddressSchema } from './validation';

import {
  ProfileCreation,
  profileCreationInitialState,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const { setAddress } = useProfileCreationStore();

  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<ProfileCreation['address']>({
    resolver: yupResolver<ProfileCreation['address']>(companyAddressSchema),
    defaultValues: profileCreationInitialState.address,
    mode: 'onChange',
  });

  const onChange = useCallback(() => {
    setAddress(getValues());
  }, []);

  return { onChange, isValid, control, setValue, getValues };
};
