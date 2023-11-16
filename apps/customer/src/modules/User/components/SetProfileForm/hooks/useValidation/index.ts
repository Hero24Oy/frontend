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

import { useSetRequiredProfileFields } from '$modules/User/hooks';

export type UseValidationParams = {
  onSetProfileSucceed: () => void;
};

export const useValidation = (params: UseValidationParams) => {
  const { onSetProfileSucceed } = params;
  const { editUser } = useSetRequiredProfileFields();

  const {
    user: {
      id: userId,
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
        // TODO handle business account as well
        await editUser.request({
          userId,
          data: normalizeProfileData(data),
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
