import { Auth } from 'firebase/auth';
import { create } from 'zustand';

import { FirebaseAuthStore } from './types';

export const useFirebaseAuthStore = create<FirebaseAuthStore>((set) => ({
  firebaseAuth: null,
  setFirebaseAuth: (firebaseAuth: Auth): void => set({ firebaseAuth }),
}));
