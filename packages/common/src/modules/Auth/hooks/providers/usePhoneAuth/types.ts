import { ApplicationVerifier } from 'firebase/auth';

import { WithCallback } from '../../types';

export type PhoneAuthConfig = {
  verificationCode: string;
};

export type SignInWithPhone = (config: PhoneAuthConfig) => Promise<void>;

export type SendVerificationCodeParams = {
  phoneNumber: string;
  reCaptcha: ApplicationVerifier | null;
};

export type SendVerificationCode = (
  config: SendVerificationCodeParams,
) => Promise<void>;

export type UsePhoneAuthConfig = WithCallback;

export type UsePhoneAuth = (props: UsePhoneAuthConfig) => {
  sendVerificationCode: SendVerificationCode;
  signInWithPhone: SignInWithPhone;
};
