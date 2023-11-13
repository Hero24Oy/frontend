/* eslint-disable @typescript-eslint/naming-convention -- TODO remove */
import {
  createContext,
  // Dispatch,
  ReactNode,
  // SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
// import { create } from 'zustand';

// type TimerState = {
//   resterTimer: (timeInSeconds?: number) => void;
//   timeLeftInSeconds: number;
// };

// const useTimerStore = create<TimerState>()((set) => ({
//   timeLeftInSeconds: 0,
//   resterTimer: (timeLeftInSeconds) =>
//     set(() => ({ timeLeftInSeconds: timeLeftInSeconds ?? 0 })),
// }));

const TimerData = createContext<number>(1);

const TimerApi = createContext<() => void>(() => undefined);

export const useTimerData = () => useContext(TimerData);

export const useTimerApi = () => useContext(TimerApi);

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [timeLeftInSeconds, setTimeLeftInSeconds] = useState(60);
  const [hasTimerStarted, setHasTimerStarted] = useState(true);

  const resetTimer = useCallback(() => {
    setTimeLeftInSeconds(60); // TODO
    setHasTimerStarted(true);
  }, []);

  useEffect(() => {
    if (timeLeftInSeconds <= 0 || !hasTimerStarted) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeftInSeconds((prevTime) => prevTime - 1);
      // eslint-disable-next-line no-magic-numbers -- setInterval accepts time in milliseconds
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeftInSeconds]);

  return (
    <TimerData.Provider value={timeLeftInSeconds}>
      <TimerApi.Provider value={resetTimer}>{children}</TimerApi.Provider>
    </TimerData.Provider>
  );
};
