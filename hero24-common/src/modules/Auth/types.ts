import { Auth } from 'firebase/auth';

import { User } from '../User';

export type AuthProviderProps = {
  firebaseAuth: Auth;
};

export type AuthContextProps = {
  accessToken: string | null;
  firebaseAuth: Auth | null;
  isLoading: boolean;
  logout: () => Promise<void>;
  user: User | null;
};
