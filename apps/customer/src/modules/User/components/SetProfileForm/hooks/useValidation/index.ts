import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import {
  handleAuthError,
  parseError,
  useCachedGraphQlUser,
} from '@hero24/common';

import { SetProfileFormData, validationSchema } from '../../validation';

// import { normalizeProfileData } from './utils';

export type UseValidationParams = {
  onSetProfileSucceed: () => void;
};

export const useValidation = (params: UseValidationParams) => {
  const { onSetProfileSucceed } = params;

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
    handleSubmit((_data: SetProfileFormData) => {
      try {
        // const profileData = normalizeProfileData(data);
        onSetProfileSucceed();
      } catch (error) {
        handleAuthError(parseError(error));
      }
    }),
    [],
  );

  return {
    onSubmitHandler,
    isValid,
    control,
    isLoading: isSubmitting,
  };
};
