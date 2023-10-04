import { EmailPasswordData } from 'modules/Auth/types';

export type AuthResult = {
  id: string;
};

export type SignInWithProvider = SignInWithEmail | SignUpWithEmail;

export type SignInWithEmail = (data: EmailPasswordData) => Promise<AuthResult>;

export type SignUpWithEmail = (data: EmailPasswordData) => Promise<AuthResult>;
