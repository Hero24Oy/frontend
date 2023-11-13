import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { Control, useForm, UseFormSetValue } from 'react-hook-form';

import { BioBase } from './types';
import { bioSchema } from './validation';

type Params<Type extends BioBase> = {
  defaultValues: Type;
  setter: (form: Type) => void;
};

type ReturnType = {
  control: Control<BioBase>;
  isValid: boolean;
  onChange: () => void;
  setValue: UseFormSetValue<BioBase>;
};

export const useBioLogic = <Type extends BioBase>(
  params: Params<Type>,
): ReturnType => {
  const { defaultValues, setter } = params;

  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<BioBase>({
    resolver: yupResolver<BioBase>(bioSchema),
    defaultValues,
    mode: 'onChange',
  });

  const onChange = useCallback(() => {
    setter(getValues() as Type);
  }, []);

  return { control, setValue, isValid, onChange };
};
