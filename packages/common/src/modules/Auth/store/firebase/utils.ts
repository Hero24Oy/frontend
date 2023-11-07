import { Auth } from 'firebase/auth';

import { useFirebaseAuthStore } from './provider';

export const initializeFirebaseStore = (auth: Auth): void =>
  useFirebaseAuthStore.getState().setFirebaseAuth(auth);
