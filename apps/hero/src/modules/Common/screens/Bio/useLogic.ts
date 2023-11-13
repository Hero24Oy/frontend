import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { Bio } from './types';
import { bioSchema } from './validation';

type Params = {
  defaultValues: Bio;
  setter: (form: Bio) => void;
};

export const useBioLogic = (params: Params) => {
  const { defaultValues, setter } = params;

  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<Bio>({
    resolver: yupResolver<Bio>(bioSchema),
    defaultValues,
    mode: 'onChange',
  });

  const onChange = useCallback(() => {
    setter(getValues());
  }, []);

  return { control, setValue, isValid, onChange };
};
