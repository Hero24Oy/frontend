import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { defaultValues } from '../constants';
import { WorkData } from '../types';
import { workDataSchema } from '../validation';

import { useCompanyCreationStore } from '$modules/Profile/stores';

export const useLogic = () => {
  const { setWorkData } = useCompanyCreationStore();

  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<WorkData>({
    resolver: yupResolver<WorkData>(workDataSchema),
    defaultValues,
    mode: 'onChange',
  });

  const onChange = useCallback(() => {
    setWorkData(getValues());
  }, []);

  return { control, setValue, isValid, onChange };
};
