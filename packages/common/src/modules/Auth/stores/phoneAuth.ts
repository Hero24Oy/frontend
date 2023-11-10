import { ApplicationVerifier } from 'firebase/auth';
import { create } from 'zustand';

export type PhoneAuthStore = {
  setPhoneNumber: (phoneNumber: string) => void;
  setReCaptcha: (reCaptcha: ApplicationVerifier) => void;
  setVerificationId: (verificationId: string) => void;

  phoneNumber?: string;
  reCaptcha?: ApplicationVerifier;
  verificationId?: string;
};

const useStore = create<PhoneAuthStore>((set) => ({
  setVerificationId: (verificationId) => set({ verificationId }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setReCaptcha: (reCaptcha) => set({ reCaptcha }),
}));

export const usePhoneAuthStore = () => {
  const store = useStore();

  return store;
};
