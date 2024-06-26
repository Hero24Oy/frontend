import { useSendOneMoreTime } from './useSendOneMoreTime';
import { useValidation } from './useValidation';

import { handleAuthError } from '$modules/Auth/utils';

export const useLogic = () => {
  const { control, isSubmitting, isValid, onSubmit } = useValidation();

  const { sendOneMoreTime } = useSendOneMoreTime({
    onAuthFailed: handleAuthError,
  });

  return {
    control,
    isValid,
    sendOneMoreTimeHandler: sendOneMoreTime,
    isLoading: isSubmitting,
    onSubmitHandler: onSubmit,
  };
};
