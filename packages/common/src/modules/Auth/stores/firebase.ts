import { Auth } from 'firebase/auth';
import { create } from 'zustand';

export type FirebaseAuthStore = {
  firebaseAuth: Auth | null;
  setFirebaseAuth: (firebaseAuth: Auth) => void;
};

const useStore = create<FirebaseAuthStore>((set) => ({
  firebaseAuth: null,
  setFirebaseAuth: (firebaseAuth: Auth): void => set({ firebaseAuth }),
}));

export const initializeFirebaseStore = (auth: Auth): void =>
  useStore.getState().setFirebaseAuth(auth);

export const useFirebaseAuth = (): Auth => {
  const { firebaseAuth } = useStore();

  if (!firebaseAuth) {
    throw new Error('Firebase Auth is not initialized');
  }

  return firebaseAuth;
};
