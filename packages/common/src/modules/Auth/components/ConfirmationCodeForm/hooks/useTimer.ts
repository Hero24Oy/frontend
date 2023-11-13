import { useCallback, useEffect, useState } from 'react';

const ONE_SECOND = 1000;

type UseDebounceProps = {
  timeInSeconds: number;
};

export const useTimer = (props: UseDebounceProps) => {
  const { timeInSeconds } = props;
  const [timeLeft, setTimeLeft] = useState(timeInSeconds);
  const [hasTimerStarted, setHasTimerStarted] = useState(true);

  const resetTimer = useCallback(() => {
    setTimeLeft(timeInSeconds);
    setHasTimerStarted(true);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0 || !hasTimerStarted) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, ONE_SECOND);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return {
    timeLeft,
    resetTimer,
  };
};
