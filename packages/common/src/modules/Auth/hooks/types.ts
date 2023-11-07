import { UserCredential } from 'firebase/auth';

export type EmailPasswordParams = {
  email: string;
  password: string;
};

export type WithCallback = {
  onAuthFailed?: (error: Error) => void;
  onAuthSucceed?: (credentials?: UserCredential) => void;
};
