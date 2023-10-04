import { EmailPasswordData } from '../../types';

export type AuthResult = {
  id: string;
};

export type SignInWithProvider =
  | SignInWithEmail
  | SignUpWithEmail
  | SignInWithGoogle;

export type SignInWithEmail = (data: EmailPasswordData) => Promise<AuthResult>;

export type SignUpWithEmail = (data: EmailPasswordData) => Promise<AuthResult>;

export type SignInWithGoogle = () => Promise<void>;
