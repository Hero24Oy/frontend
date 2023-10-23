import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';

import {
  getAuthTokenGetter,
  getUidGetter,
  initFirebaseApp,
  initFirebaseAuth,
} from '@hero24/common';

import { firebaseConfig } from '$configs';

export const app: FirebaseApp = initFirebaseApp(firebaseConfig);

export const auth: Auth = initFirebaseAuth(app);

export const getAuthToken: () => Promise<string | undefined> =
  getAuthTokenGetter(auth);

export const getUid: () => string | undefined = getUidGetter(auth);
