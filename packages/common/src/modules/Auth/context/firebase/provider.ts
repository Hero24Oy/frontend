import { Auth } from 'firebase/auth';

import { firebaseAuthStore } from './store';

export const initializeFirebaseProvider = (auth: Auth): void =>
  firebaseAuthStore.getState().setFirebaseAuth(auth);
