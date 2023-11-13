import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from 'react';
import { create } from 'zustand';

import { DEBOUNCE_TIME_IN_SECONDS, ONE_SECOND } from './constants';

type TimerState = {
  hasTimerStarted: boolean;
  resetTimer: (timeInSeconds?: number) => void;
  subtractOneSecond: () => void;
  timeLeftInSeconds: number;
};

const useTimerStore = create<TimerState>()((set) => ({
  timeLeftInSeconds: DEBOUNCE_TIME_IN_SECONDS,
  resetTimer: (timeLeftInSeconds) =>
    set(() => ({
      timeLeftInSeconds: timeLeftInSeconds ?? 0,
      hasTimerStarted: true,
    })),
  subtractOneSecond: () =>
    set(({ timeLeftInSeconds }) => ({
      timeLeftInSeconds: timeLeftInSeconds - ONE_SECOND,
    })),
  hasTimerStarted: true,
}));

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

  const { timeLeftInSeconds, resetTimer, subtractOneSecond, hasTimerStarted } =
    useTimerStore();

  useEffect(() => {
    if (timeLeftInSeconds <= 0 || !hasTimerStarted) {
      return;
    }

    const interval = setInterval(() => {
      subtractOneSecond();
      // eslint-disable-next-line no-magic-numbers -- setInterval accepts time in milliseconds
    }, ONE_SECOND * 1000);

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
