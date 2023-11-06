import { Auth } from 'firebase/auth';

import { useFirebaseAuthStore } from './store';

export const initializeFirebaseStore = (auth: Auth): void =>
  useFirebaseAuthStore.getState().setFirebaseAuth(auth);
