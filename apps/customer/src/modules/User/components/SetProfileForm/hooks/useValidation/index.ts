import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import {
  handleAuthError,
  parseError,
  useCachedGraphQlUser,
} from '@hero24/common';

import { SetProfileFormData, validationSchema } from '../../validation';

import { prepareCustomerData, prepareUserData } from './utils';

import { useEditCustomer } from '$modules/Customer';
import { useEditUser } from '$modules/User/hooks';

export type UseValidationParams = {
  onSetProfileSucceed: () => void;
};

export const useValidation = (params: UseValidationParams) => {
  const { onSetProfileSucceed } = params;
  const { editUser } = useEditUser();
  const { editCustomer } = useEditCustomer();

  const {
    user: {
      id: userId,
      data: {
        firstName: initialFirstName,
        lastName: initialLastName,
        email: initialEmail,
      },
    },
  } = useCachedGraphQlUser();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isValid },
  } = useForm<SetProfileFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: initialEmail,
      firstName: initialFirstName ?? '',
      lastName: initialLastName ?? '',
      isBusinessCustomer: false,
    },
    mode: 'onChange',
  });

  const isBusinessCustomer = getValues('isBusinessCustomer');

  const onSubmitHandler = useMemo(
    () =>
      handleSubmit(async (data: SetProfileFormData) => {
        try {
          // TODO when migrating to SQL create transaction for editing customer and user data
          const editUserRequest = editUser.request({
            userId,
            data: prepareUserData(data),
          });

          const editCustomerRequest = editCustomer.request({
            id: userId,
            data: prepareCustomerData(data),
          });

          await Promise.allSettled([editUserRequest, editCustomerRequest]);

          onSetProfileSucceed();
        } catch (error) {
          handleAuthError(parseError(error));
        }
      }),
    [],
  );

  return {
    onSubmitHandler,
    isBusinessCustomer,
    isValid,
    control,
    isLoading: isSubmitting,
  };
};
