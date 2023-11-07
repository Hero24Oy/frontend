import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { defaultValues } from '../constants';
import { WorkData } from '../types';
import { workDataShape } from '../validation';

import { useCompanyCreationStore } from '$modules/Profile/stores';

export const useLogic = () => {
  const { setWorkData } = useCompanyCreationStore();

  const {
    control,
    getValues,
    formState: { isValid },
  } = useForm<WorkData>({
    resolver: yupResolver<WorkData>(workDataShape),
    defaultValues,
    mode: 'onChange',
  });

  const onChange = useCallback(() => {
    setWorkData(getValues());
  }, []);

  return { control, isValid, onChange };
};
