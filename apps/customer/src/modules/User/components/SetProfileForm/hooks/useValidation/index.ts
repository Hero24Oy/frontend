import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import {
  handleAuthError,
  parseError,
  useCachedGraphQlUser,
} from '@hero24/common';

import { SetProfileFormData, validationSchema } from '../../validation';

import { normalizeProfileData } from './utils';

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
    handleSubmit(async (data: SetProfileFormData) => {
      try {
        const profileData = normalizeProfileData(data);

        // TODO remove after, imitate request
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            console.debug('profileData', profileData);
            resolve();
            // eslint-disable-next-line  no-magic-numbers -- TODO will be removed
          }, 1000);
        });

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
