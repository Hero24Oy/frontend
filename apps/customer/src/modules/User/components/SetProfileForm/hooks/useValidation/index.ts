import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import {
  handleAuthError,
  parseError,
  useCachedGraphQlUser,
} from '@hero24/common';

import { SetProfileFormData, validationSchema } from '../../validation';

import { getCustomerData, getUserData } from './utils';

import { GqlCustomerType, useEditCustomer } from '$modules/Customer';
import { useSetRequiredProfileFields } from '$modules/User/hooks';

export type UseValidationParams = {
  onSetProfileSucceed: () => void;
};

export const useValidation = (params: UseValidationParams) => {
  const { onSetProfileSucceed } = params;
  const { editUser } = useSetRequiredProfileFields();
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

  const onSubmitHandler = useMemo(
    () =>
      handleSubmit(async (data: SetProfileFormData) => {
        try {
          const userData = getUserData(data);

          const editUserRequest = editUser.request({
            userId,
            data: userData,
          });

          const customerType = data.isBusinessCustomer
            ? GqlCustomerType.PROFESSIONAL
            : GqlCustomerType.INDIVIDUAL;

          const professionalCustomerData = getCustomerData(data);

          const editCustomerRequest = editCustomer.request({
            id: userId,
            data: {
              type: customerType,
              ...professionalCustomerData,
            },
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
    isValid,
    control,
    isLoading: isSubmitting,
  };
};
