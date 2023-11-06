import { Auth } from 'firebase/auth';
import { create } from 'zustand';

import { FirebaseAuthStore } from './types';

export const firebaseAuthStore = create<FirebaseAuthStore>((set) => ({
  firebaseAuth: null,
  setFirebaseAuth: (firebaseAuth: Auth): void => set({ firebaseAuth }),
}));
