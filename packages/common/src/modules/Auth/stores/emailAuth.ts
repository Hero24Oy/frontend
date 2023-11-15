import { create } from 'zustand';

import { Maybe } from '$core';

// TODO move to common when phone auth is merged
type StrictTyping = 'strict' | 'notStrict';

export type EmailAuthStore<Strict extends StrictTyping = 'notStrict'> = {
  email: Strict extends 'strict' ? string : Maybe<string>;
  setEmail: (email: string) => void;
};

const useStore = create<EmailAuthStore>((set) => ({
  email: undefined,
  setEmail: (email: string): void => set({ email }),
}));

export const useEmailAuthStore = <
  Strict extends StrictTyping = 'notStrict',
>(): EmailAuthStore<Strict> => {
  const store = useStore();

  return store as EmailAuthStore<Strict>;
};
