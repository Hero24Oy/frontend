import { Auth } from 'firebase/auth';

export type FirebaseAuthStore = {
  firebaseAuth: Auth | null;
  setFirebaseAuth: (firebaseAuth: Auth) => void;
};
