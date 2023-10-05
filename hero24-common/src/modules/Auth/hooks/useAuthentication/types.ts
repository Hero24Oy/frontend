import { AuthSessionResult, GoogleAuthRequestConfig } from 'expo-auth-session';
import { Auth } from 'firebase/auth';

export type EmailPasswordData = {
  email: string;
  password: string;
};

export type AuthResult = {
  id: string;
};

// TODO separate types
export type Config = {
  firebaseAuth: Auth;
  googleAuth: Partial<GoogleAuthRequestConfig>;
};

export type SignInWithProvider =
  | SignInWithEmail
  | SignUpWithEmail
  | SignInWithGoogle;

export type SignInWithEmail = (data: EmailPasswordData) => Promise<void>;

export type SignUpWithEmail = (data: EmailPasswordData) => Promise<AuthResult>;

export type SignInWithGoogle = () => Promise<AuthSessionResult>; // TODO better types
