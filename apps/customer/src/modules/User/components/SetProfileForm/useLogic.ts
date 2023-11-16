import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import {
  handleAuthError,
  parseError,
  useCachedGraphQlUser,
  useFirebaseUser,
} from '@hero24/common';

import { normalizeProfileData } from './utils';
import { SetProfileFormData, validationSchema } from './validation';

export type UseLogicParams = {
  onSetProfileSucceed: () => void;
};

export const useLogic = (params: UseLogicParams) => {
  const { onSetProfileSucceed } = params;

  const {
    user: {
      data: { firstName, lastName, email },
    },
  } = useCachedGraphQlUser();

  const firebaseUser = useFirebaseUser();

  const isEmailProvided = Boolean(firebaseUser.user?.email);

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
    control,
    onSubmitHandler,
    isLoading: isSubmitting,
    isValid,
    isEmailProvided,
  };
};
