import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { DEFAULT_COUNTRY, useCreateMultiProgressBar } from '@hero24/common';

import { companyAddressSchema } from './validation';

import {
  getMultiProgressBarInitialState,
  HeroType,
  ProfileCreation,
  profileCreationInitialState,
  useProfileCreationStore,
} from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { welcome, setAddress } = useProfileCreationStore();

  // * We are sure that we will have heroType on this stage.
  const heroType = welcome.heroType ?? HeroType.PROFESSIONAL;

  const { control, getValues, setValue, formState, resetField } = useForm<
    ProfileCreation['address']
  >({
    resolver: yupResolver<ProfileCreation['address']>(
      companyAddressSchema(DEFAULT_COUNTRY),
    ),
    defaultValues: profileCreationInitialState.address,
    mode: 'onChange',
  });

  const { multiScreenProgressBar } = useCreateMultiProgressBar({
    initialState: getMultiProgressBarInitialState(),
    progressBarInfo: {
      formState,
      getValues,
      progressBarIndex: 2,
    },
  });

  const submitData = useCallback(() => {
    setAddress(getValues());
    router.push('/');
  }, []);

  return {
    multiScreenProgressBar,
    heroType,
    submitData,
    isValid: formState.isValid,
    control,
    setValue,
    getValues,
    resetField,
  };
};
