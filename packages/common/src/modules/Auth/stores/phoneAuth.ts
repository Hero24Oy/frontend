import { ApplicationVerifier } from 'firebase/auth';
import { create } from 'zustand';

import { Maybe } from '$core';

export type PhoneAuthStore<Strict extends boolean = false> = {
  phoneNumber: Strict extends true ? string : Maybe<string>;
  reCaptcha: Strict extends true
    ? ApplicationVerifier
    : Maybe<ApplicationVerifier>;
  setPhoneNumber: (phoneNumber: string) => void;

  setReCaptcha: (reCaptcha: ApplicationVerifier) => void;
  setVerificationId: (verificationId: string) => void;
  verificationId: Strict extends true ? string : Maybe<string>;
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
  Strict extends boolean = false,
>(): PhoneAuthStore<Strict> => {
  const store = useStore();

  return store as PhoneAuthStore<Strict>;
};
