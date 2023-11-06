import { Auth } from 'firebase/auth';

import { useFirebaseAuthStore } from './provider';

export const useFirebaseAuth = (): Auth => {
  const { firebaseAuth } = useFirebaseAuthStore();

  if (!firebaseAuth) {
    throw new Error('Firebase Auth is not initialized');
  }

  return firebaseAuth;
};
