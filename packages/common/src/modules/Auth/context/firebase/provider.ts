import { Auth } from 'firebase/auth';

import { firebaseAuthStore } from './store';

export const initializeFirebaseStore = (auth: Auth): void =>
  firebaseAuthStore.getState().setFirebaseAuth(auth);
