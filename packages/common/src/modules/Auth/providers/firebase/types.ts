import { Auth } from 'firebase/auth';

export type FirebaseAuthState = {
  firebaseAuth: Auth | null;
  setFirebaseAuth: (firebaseAuth: Auth) => void;
};
