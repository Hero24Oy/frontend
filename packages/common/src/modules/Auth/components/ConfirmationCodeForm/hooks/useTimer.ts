import { useCallback, useEffect, useState } from 'react';

const ONE_SECOND = 1;

type UseDebounceProps = {
  timeInSeconds: number;
};

export const useTimer = (props: UseDebounceProps) => {
  const { timeInSeconds } = props;
  const [timeLeftInSeconds, setTimeLeftInSeconds] = useState(timeInSeconds);
  const [hasTimerStarted, setHasTimerStarted] = useState(true);

  const resetTimer = useCallback(() => {
    setTimeLeftInSeconds(timeInSeconds);
    setHasTimerStarted(true);
  }, []);

  useEffect(() => {
    if (timeLeftInSeconds <= 0 || !hasTimerStarted) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeftInSeconds((prevTime) => prevTime - ONE_SECOND);
      // eslint-disable-next-line no-magic-numbers -- setInterval accepts time in milliseconds
    }, ONE_SECOND * 1000);

    return () => clearInterval(interval);
  }, [timeLeftInSeconds]);

  return {
    timeLeftInSeconds,
    resetTimer,
  };
};
