import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { $Keys } from 'utility-types';

import {
  handleAuthError,
  parseError,
  useCachedGraphQlUser,
  useFirebaseUser,
} from '@hero24/common';
import { Input } from '@hero24/ui';

import { normalizeProfileData } from './utils';
import { SetProfileFormData, validationSchema } from './validation';

// TODO separate to hooks
export type InputField<FieldName extends string> = {
  name: FieldName;
} & Pick<Parameters<typeof Input>[0], 'placeholder' | 'isDisabled' | 'title'>;

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

  const inputFields = useMemo<InputField<$Keys<SetProfileFormData>>[]>(
    () => [
      {
        name: 'firstName',
        title: 'First name',
        placeholder: 'Enter',
      },
      {
        name: 'lastName',
        title: 'Last name',
        placeholder: 'Enter',
      },
      {
        name: 'email',
        title: 'Email',
        placeholder: 'Enter',
        isDisabled: isEmailProvided,
      },
    ],
    [],
  );

  return {
    control,
    isValid,
    isEmailProvided,
    inputFields,
    onSubmitHandler,
    isLoading: isSubmitting,
  };
};
