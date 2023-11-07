import { Auth } from 'firebase/auth';
import { create } from 'zustand';

export type FirebaseAuthStore = {
  firebaseAuth: Auth | null;
  setFirebaseAuth: (firebaseAuth: Auth) => void;
};

const useFirebaseAuthStore = create<FirebaseAuthStore>((set) => ({
  firebaseAuth: null,
  setFirebaseAuth: (firebaseAuth: Auth): void => set({ firebaseAuth }),
}));

export const initializeFirebaseStore = (auth: Auth): void =>
  useFirebaseAuthStore.getState().setFirebaseAuth(auth);

export const useFirebaseAuth = (): Auth => {
  const { firebaseAuth } = useFirebaseAuthStore();

  if (!firebaseAuth) {
    throw new Error('Firebase Auth is not initialized');
  }

  return firebaseAuth;
};
