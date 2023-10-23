import { FirebaseApp, initializeApp } from 'firebase/app';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  functionsUrl: string;
  messagingSenderId: string;
  projectId: string;
  storageBucket: string;
}

export const initFirebaseApp = (firebaseConfig: FirebaseConfig): FirebaseApp =>
  initializeApp(firebaseConfig);
