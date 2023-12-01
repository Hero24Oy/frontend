import { create } from 'zustand';

import { Maybe, StrictType } from '$core';

// TODO move to common when phone auth is merged
export type EmailAuthStore<Strict extends StrictType = StrictType.NOT_STRICT> =
  {
    email: Strict extends StrictType.STRICT ? string : Maybe<string>;
    setEmail: (email: string) => void;
  };

const useStore = create<EmailAuthStore>((set) => ({
  email: undefined,
  setEmail: (email: string): void => set({ email }),
}));

export const useEmailAuthStore = <
  Strict extends StrictType = StrictType.NOT_STRICT,
>(): EmailAuthStore<Strict> => {
  const store = useStore();

  return store as EmailAuthStore<Strict>;
};
