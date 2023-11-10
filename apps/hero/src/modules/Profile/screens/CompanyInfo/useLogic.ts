import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { companyInfoSchema } from './validation';

import {
  CompanyCreation,
  companyCreationInitialState,
  useCompanyCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
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

  const submitData = useCallback(() => {
    setCompanyInfo(getValues());
  }, []);

  return { control, setValue, isValid, submitData };
};
