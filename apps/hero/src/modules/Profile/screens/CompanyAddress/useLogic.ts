import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { companyAddressSchema } from './validation';

import {
  CompanyCreation,
  companyCreationInitialState,
  useCompanyCreationStore,
} from '$modules';

export const useLogic = () => {
  const { setCompanyAddress } = useCompanyCreationStore();

  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<CompanyCreation['companyAddress']>({
    resolver:
      yupResolver<CompanyCreation['companyAddress']>(companyAddressSchema),
    defaultValues: companyCreationInitialState.companyAddress,
    mode: 'onSubmit',
  });

  const onChange = useCallback(() => {
    setCompanyAddress(getValues());
  }, []);

  return { onChange, isValid, control, setValue };
};
