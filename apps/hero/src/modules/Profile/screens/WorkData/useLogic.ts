import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { workDataSchema } from './validation';

import {
  CompanyCreation,
  companyCreationInitialState,
  useCompanyCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const { setWorkData } = useCompanyCreationStore();

  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<CompanyCreation['workData']>({
    resolver: yupResolver<CompanyCreation['workData']>(workDataSchema),
    defaultValues: companyCreationInitialState.workData,
    mode: 'onChange',
  });

  const onChange = useCallback(() => {
    setWorkData(getValues());
  }, []);

  return { control, setValue, isValid, onChange };
};
