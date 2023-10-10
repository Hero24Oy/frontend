import { Auth } from 'firebase/auth';
import { create, StoreApi, UseBoundStore } from 'zustand';

type FirebaseAuth = {
  firebaseAuth: Auth;
};

type UseStore = UseBoundStore<StoreApi<FirebaseAuth>>;

let useStore: UseStore | null = null;

export const initializeFirebaseAuth = (auth: Auth): void => {
  useStore = create(() => ({
    firebaseAuth: auth,
  }));
};

export const useFirebaseAuth = (): Auth => {
  if (!useStore) {
    throw new Error('Firebase Auth is not initialized');
  }

  const { firebaseAuth } = useStore();

  return firebaseAuth;
};
