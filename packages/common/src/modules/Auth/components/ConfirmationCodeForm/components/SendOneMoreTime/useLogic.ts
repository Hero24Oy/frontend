import { useCallback, useEffect } from 'react';

import { useTimer } from '../../hooks';

import { parseError } from '$core';
import { handleAuthError } from '$modules/Auth/utils';

export type UseLogicParams = {
  onPress: () => Promise<void>;
};

export const useLogic = (params: UseLogicParams) => {
  const { onPress } = params;
  const { resetTimer, timeLeftInSeconds } = useTimer();
  const isDisabled = timeLeftInSeconds > 0;

  // start timer at the mount
  useEffect(() => resetTimer(), []);

  const onPressHandler = useCallback(async () => {
    try {
      await onPress();

      resetTimer();
    } catch (error) {
      const parsedError = parseError(error);

      handleAuthError(parsedError);
    }
  }, [onPress]);

  // TODO i18n
  const message = isDisabled
    ? `Send one more time after ${timeLeftInSeconds}`
    : ' Send one more time';

  return {
    onPressHandler,
    message,
    isDisabled,
  };
};
