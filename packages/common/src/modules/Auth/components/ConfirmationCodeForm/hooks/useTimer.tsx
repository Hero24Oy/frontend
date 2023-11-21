import { useCallback, useEffect, useState } from 'react';

import { DEBOUNCE_TIME_IN_SECONDS } from '$configs';

export const useTimer = () => {
  const [timeLeftInSeconds, setTimeLeftInSeconds] = useState<number>(
    DEBOUNCE_TIME_IN_SECONDS,
  );

  const [hasTimerStarted, setHasTimerStarted] = useState(true);

  const resetTimer = useCallback(() => {
    setTimeLeftInSeconds(DEBOUNCE_TIME_IN_SECONDS);
    setHasTimerStarted(true);
  }, []);

  useEffect(() => {
    if (!hasTimerStarted) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeftInSeconds((prevState) => {
        const updatedTime = prevState - 1;

        if (updatedTime <= 0) {
          setHasTimerStarted(false);
        }

        return updatedTime;
      });
      // eslint-disable-next-line no-magic-numbers -- setInterval accepts time in milliseconds
    }, 1000);

    return () => clearInterval(interval);
  }, [hasTimerStarted]);

  return { resetTimer, timeLeftInSeconds };
};
