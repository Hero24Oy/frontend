import { OAuthCredential, UserCredential } from 'firebase/auth';

export type EmailPasswordData = {
  email: string;
  password: string;
};

export type SignInWithCredentials = (
  credentials: OAuthCredential,
) => Promise<UserCredential | undefined>;

export type WithCallback = {
  onAuthSucceed: SignInWithCredentials;
  onAuthFailed?: (error: Error) => void;
};
