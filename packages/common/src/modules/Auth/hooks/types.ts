import { OAuthCredential } from 'firebase/auth';

export type EmailPasswordParams = {
  email: string;
  password: string;
};

export type WithCallback = {
  onAuthFailed?: (error: Error) => void;
  onAuthSucceed?: (credentials?: OAuthCredential) => Promise<unknown> | void;
};
