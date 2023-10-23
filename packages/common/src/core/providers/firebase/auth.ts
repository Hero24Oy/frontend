import AsyncStorage from '@react-native-async-storage/async-storage';
import { FirebaseApp } from 'firebase/app';
import { Auth, initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import { create } from 'zustand';

type FirebaseAuthState = {
  firebaseAuth: Auth | null;
  setFirebaseAuth: (firebaseAuth: Auth) => void;
};

export const useFirebaseAuthStore = create<FirebaseAuthState>((set) => ({
  firebaseAuth: null,
  setFirebaseAuth: (firebaseAuth: Auth): void => set({ firebaseAuth }),
}));

export const initFirebaseAuth = (firebaseApp: FirebaseApp): Auth =>
  initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
  });

export const initializeFirebaseAuth = (auth: Auth): void =>
  useFirebaseAuthStore.getState().setFirebaseAuth(auth);
