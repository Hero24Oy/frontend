import { OAuthCredential, UserCredential } from 'firebase/auth';

export type EmailPasswordData = {
  email: string;
  password: string;
};

export type SignInWithCredentials = (
  credentials: OAuthCredential,
) => Promise<UserCredential>;

export type OnAuthSucceed = {
  onAuthSucceed: SignInWithCredentials;
};
