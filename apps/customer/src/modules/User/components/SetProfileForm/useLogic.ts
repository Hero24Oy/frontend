import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { useCachedGraphQlUser } from '@hero24/common';

import { SetProfileFormData, validationSchema } from './validation';

export const useLogic = () => {
  const {
    user: {
      data: { firstName, lastName, email },
    },
  } = useCachedGraphQlUser();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<SetProfileFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      email,
    },
    mode: 'onChange',
  });

  const onSubmitHandler = useCallback(
    handleSubmit(async (data: SetProfileFormData) => {
      console.debug('data', data);
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
          // eslint-disable-next-line  no-magic-numbers -- TODO stub
        }, 3000);
      });
    }),
    [],
  );

  return {
    control,
    onSubmitHandler,
    isLoading: isSubmitting,
    isValid,
  };
};
