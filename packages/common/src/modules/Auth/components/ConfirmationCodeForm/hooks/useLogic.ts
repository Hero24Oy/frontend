import { useEffect } from 'react';

import { useResetTimer } from '../components';

import { useSendOneMoreTime } from './useSendOneMoreTime';
import { useValidation } from './useValidation';

import { handleAuthError } from '$modules/Auth/utils';

export const useLogic = () => {
  const { control, isSubmitting, isValid, onSubmit } = useValidation();
  const resetTimer = useResetTimer();

  // start timer at the mount
  useEffect(() => resetTimer(), []);

  const { sendOneMoreTime } = useSendOneMoreTime({
    onAuthFailed: handleAuthError,
  });

  return {
    control,
    isValid,
    isLoading: isSubmitting,
    onSubmitHandler: onSubmit,
    onSendOneMoreTimeHandler: sendOneMoreTime,
  };
};
