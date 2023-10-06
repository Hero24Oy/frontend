import { GoogleAuthRequestConfig } from 'expo-auth-session';
// TODO see doc
import { Auth } from 'firebase/auth';

export type EmailPasswordData = {
  email: string;
  password: string;
};

export type AuthResult = {
  id: string;
};

export type Config = {
  firebaseAuth: Auth;
  googleAuth: Partial<GoogleAuthRequestConfig>;
};

export type SignInWithProvider =
  | SignInWithEmail
  | SignUpWithEmail
  | SignInWithGoogle;

export type SignInWithEmail = (data: EmailPasswordData) => Promise<void>;

export type SignUpWithEmail = (data: EmailPasswordData) => Promise<void>;

export type SignInWithGoogle = () => Promise<void>;
