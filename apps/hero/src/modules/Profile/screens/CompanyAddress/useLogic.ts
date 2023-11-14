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
  const { setCompanyAddress } = useProfileCreationStore();

  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<ProfileCreation['companyAddress']>({
    resolver:
      yupResolver<ProfileCreation['companyAddress']>(companyAddressSchema),
    defaultValues: profileCreationInitialState.companyAddress,
    mode: 'onChange',
  });

  const onChange = useCallback(() => {
    setCompanyAddress(getValues());
  }, []);

  return { onChange, isValid, control, setValue, getValues };
};
