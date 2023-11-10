import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { companyInfoSchema } from './validation';

import {
  CompanyCreation,
  companyCreationInitialState,
  useCompanyCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setCompanyInfo } = useCompanyCreationStore();

  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<CompanyCreation['companyInfo']>({
    resolver: yupResolver<CompanyCreation['companyInfo']>(companyInfoSchema),
    defaultValues: companyCreationInitialState.companyInfo,
    mode: 'onChange',
  });

  // TODO set proper route when next screen will be ready
  const submitData = useCallback(() => {
    setCompanyInfo(getValues());
    router.push('/');
  }, []);

  return { control, setValue, isValid, submitData };
};
