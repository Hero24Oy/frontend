import { Auth } from 'firebase/auth';

import { firebaseAuthStore } from './store';

export const useFirebaseAuth = (): Auth => {
  const { firebaseAuth } = firebaseAuthStore();

  if (!firebaseAuth) {
    throw new Error('Firebase Auth is not initialized');
  }

  return firebaseAuth;
};
