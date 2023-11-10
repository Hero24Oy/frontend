import { ApplicationVerifier } from 'firebase/auth';
import { create } from 'zustand';

import { Maybe } from '$core';

type StrictTyping = 'strict' | 'notStrict';

export type PhoneAuthStore<Strict extends StrictTyping = 'notStrict'> = {
  phoneNumber: Strict extends 'strict' ? string : Maybe<string>;
  reCaptcha: Strict extends 'strict'
    ? ApplicationVerifier
    : Maybe<ApplicationVerifier>;
  setPhoneNumber: (phoneNumber: string) => void;

  setReCaptcha: (reCaptcha: ApplicationVerifier) => void;
  setVerificationId: (verificationId: string) => void;
  verificationId: Strict extends 'strict' ? string : Maybe<string>;
};

const useStore = create<PhoneAuthStore>((set) => ({
  setVerificationId: (verificationId) => set({ verificationId }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setReCaptcha: (reCaptcha) => set({ reCaptcha }),
  phoneNumber: undefined,
  reCaptcha: undefined,
  verificationId: undefined,
}));

export const usePhoneAuthStore = <
  Strict extends StrictTyping = 'notStrict',
>(): PhoneAuthStore<Strict> => {
  const store = useStore();

  return store as PhoneAuthStore<Strict>;
};
