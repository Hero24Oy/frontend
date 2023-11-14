import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { DEBOUNCE_TIME_IN_SECONDS } from './constants';

const TimerDataContext = createContext<number>(1);

const TimerApiContext = createContext<() => void>(() => undefined);

export const useTimeLeft = () => useContext(TimerDataContext);

export const useResetTimer = () => useContext(TimerApiContext);

// * Zustand does not provide way of creating providers, so we are forced to use react context
// * This provider was created in order to optimize the app
// * By creating two context - one with timer value and one with resetting timer, we are cutting out redundant rerenders of form
// * Only components that use timer value will rerender
export const TimerProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const [timeLeftInSeconds, setTimeLeftInSeconds] = useState<number>(
    DEBOUNCE_TIME_IN_SECONDS,
  );

  const resetTimer = useCallback(
    () => setTimeLeftInSeconds(DEBOUNCE_TIME_IN_SECONDS),
    [],
  );

  useEffect(() => {
    if (timeLeftInSeconds <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeftInSeconds((prevState) => prevState - 1);
      // eslint-disable-next-line no-magic-numbers -- setInterval accepts time in milliseconds
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeftInSeconds]);

  return (
    <TimerDataContext.Provider value={timeLeftInSeconds}>
      <TimerApiContext.Provider value={resetTimer}>
        {children}
      </TimerApiContext.Provider>
    </TimerDataContext.Provider>
  );
};
