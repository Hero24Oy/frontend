import { AppleAuthenticationCredential } from 'expo-apple-authentication';
import { AuthSessionResult } from 'expo-auth-session';
import { User as FirebaseUser } from 'firebase/auth/react-native';
import { UserDB } from 'hero24-types';

import { AppAuthProvider } from './constants';

export type EmailPasswordData = {
  email: string;
  password: string;
};

export type SessionResult = {
  session: AuthSessionResult;
};

export type AuthState = {
  authenticating: boolean;
  beforeLogoutActions: string[];
  emailPasswordProvider: EmailPasswordData;
  firebaseUser: FirebaseUser | null;
  logOuting: boolean;
  user: (UserDB & { id: string }) | null;
  appleCredential?: AppleAuthenticationCredential;
  error?: string;
  provider?: AppAuthProvider;
};

// * If it's a email signin/signup then in options should be email and password
// * in another case - auth session
export type SignInAction<T extends AppAuthProvider = AppAuthProvider> =
  T extends
    | AppAuthProvider.EMAIL_PASSWORD_SIGN_IN
    | AppAuthProvider.EMAIL_PASSWORD_SIGN_UP
    ? {
        options: EmailPasswordData;
        provider: T;
      }
    : // * No need to provide auth result for apple
    T extends AppAuthProvider.APPLE
    ? {
        provider: T;
        options?: never;
      }
    : {
        options: AuthSessionResult;
        provider: T;
      };
