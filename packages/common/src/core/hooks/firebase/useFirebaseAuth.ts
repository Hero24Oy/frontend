import { useFirebaseAuthStore } from 'core/providers';
import { Auth } from 'firebase/auth';

export const useFirebaseAuth = (): Auth => {
  const { firebaseAuth } = useFirebaseAuthStore();

  if (!firebaseAuth) {
    throw new Error('Firebase Auth is not initialized');
  }

  return firebaseAuth;
};
