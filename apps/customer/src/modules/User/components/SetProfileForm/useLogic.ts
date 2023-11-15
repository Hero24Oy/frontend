import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { useCachedGraphQlUser } from '@hero24/common';

import { normalizeProfileData } from './utils';
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
      email,
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      isBusinessCustomer: false,
    },
    mode: 'onChange',
  });

  const onSubmitHandler = useCallback(
    handleSubmit(async (data: SetProfileFormData) => {
      const profileData = normalizeProfileData(data);

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.debug('profileData', profileData);
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
