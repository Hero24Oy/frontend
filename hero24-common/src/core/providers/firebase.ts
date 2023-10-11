import { Auth } from 'firebase/auth';
import { create } from 'zustand';

type FirebaseAuthState = {
  firebaseAuth: Auth | null;
  setFirebaseAuth: (firebaseAuth: Auth) => void;
};

const useFirebaseAuthStore = create<FirebaseAuthState>((set) => ({
  firebaseAuth: null,
  setFirebaseAuth: (firebaseAuth: Auth): void => set({ firebaseAuth }),
}));

export const initializeFirebaseAuth = (auth: Auth): void =>
  useFirebaseAuthStore.getState().setFirebaseAuth(auth);

export const useFirebaseAuth = (): Auth => {
  const { firebaseAuth } = useFirebaseAuthStore();

  if (!firebaseAuth) {
    throw new Error('Firebase Auth is not initialized');
  }

  return firebaseAuth;
};
