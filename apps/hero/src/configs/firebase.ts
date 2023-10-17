import { envVariables } from './env';

export const firebaseConfig = {
  apiKey: envVariables.FIREBASE_API_KEY,
  authDomain: envVariables.FIREBASE_AUTH_DOMAIN,
  databaseURL: envVariables.FIREBASE_DATABASE_URL,
  projectId: envVariables.FIREBASE_PROJECT_ID,
  storageBucket: envVariables.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envVariables.FIREBASE_MESSAGING_SENDER_ID,
  functionsUrl: envVariables.FIREBASE_FUNCTIONS_URL,
};
